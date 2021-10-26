const { MongoClient } = require('mongodb');
const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const { userMock } = require('../database');
const { getConnection } = require('./mocks/connectionMock');
const server = require('../api');

chai.use(chaiHttp);

const { expect } = chai;

describe('Users', () => {
  describe('1 - Criação de Usuário', () => {
    let db;
  
    before(async () => {
      const connectionMock = await getConnection();
  
      db = connectionMock.db('sharenergy');
  
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });
  
    after(async () => {
      MongoClient.connect.restore();
    });
  
    describe('Para quando um usuario for cadastrada com sucesso', () => {
      let response;
  
      before(async () => {
        response = await chai.request(server)
          .post('/api/users')
          .send(userMock);
      });
  
      it('propriedade "id"', () => {
        expect(response.body).to.be.property('id');
        expect(response.body).to.be.an('object');
        expect(response.body.id).to.be.an('string');
      });
      it('Esperar que o retorno da request tenha a propriedade "name"', () => {
        expect(response.body).to.be.property('name');
        expect(response.body['name']).to.be.equal('Adelino Junior');
        expect(response.body['name']).to.be.an('string');
      });
      it('Esperar que o retorno da request tenha a propriedade "email"', () => {
        expect(response.body).to.be.property('email');
        expect(response.body['email']).to.be.equal('adelinojunior@gmail.com');
        expect(response.body['email']).to.be.an('string');
      });
      it('Esperar que o retorno da request tenha a propriedade "role"', () => {
        expect(response.body).to.be.property('role');
        expect(response.body.role).to.be.equal('user');
        expect(response.body.role).to.be.an('string');
      });
      it('Esperar que o retorno da request tenha a propriedade "usinas"', () => {
        expect(response.body).to.be.property('usinas');
        expect(response.body['usinas']).to.be.an('array');
      });
      it('Espera que o status seja "201"', () => {
        expect(response).to.have.status(201);
      });
    });
    describe('Para quando um usuario não for cadastrado', () => {
      let response1;
      let response2;
  
      before(async () => {
        response1 = await chai.request(server)
          .post('/api/users')
          .send(userMock);
      });
  
      it('"email" ja cadastrado', () => {
        expect(response1.body).to.be.property('message');
        expect(response1.body.message).to.be.equal('User already exist!');
        expect(response1).to.have.status(400);
      });
  
      before(async () => {
        response2 = await chai.request(server)
          .post('/api/users')
          .send({
            name: 'Pelé',
            password: '123123'
          });
      });
      it('Sem passar dados necessarios no corpo da requisicão', () => {
        expect(response2.body).to.be.property('message');
        expect(response2.body.message).to.be.equal('Invalid Entries!');
        expect(response2).to.have.status(400);
      });
  
      before(async () => {
        response2 = await chai.request(server)
          .post('/api/users')
          .send({});
      });
      it('Passar um objecto vazio no corpo da requisicão', () => {
        expect(response2.body).to.be.property('message');
        expect(response2.body.message).to.be.equal('Invalid Entries!');
        expect(response2).to.have.status(400);
      });
    });
  });
  
  describe('2 - Buscar todos Usuários/por id especifico', () => {
  
    describe('Busca por todas Usuários', () => {
      let response;
  
      before(async () => {
        response = await chai.request(server)
          .get('/api/users');
      });
  
      it('propriedade "id"', () => {
        expect(response.body).to.be.an('array');
        expect(response.body[0]).to.be.an('object');
        expect(response.body[0]['_id']).to.be.an('string');
        expect(response.body[0]).to.be.property('_id');
        expect(response).to.have.status(200);
      });
      it('propriedade "name"', () => {
        expect(response.body[0]['name']).to.be.an('string');
        expect(response.body[0]).to.be.property('name');
      });
      it('propriedade "email"', () => {
        expect(response.body[0]['email']).to.be.an('string');
        expect(response.body[0]).to.be.property('email');
      });
      it('propriedade "role"', () => {
        expect(response.body[0]['role']).to.be.an('string');
        expect(response.body[0]).to.be.property('role');
      });
      it('propriedade "usinas"', () => {
        expect(response.body[0]['usinas']).to.be.an('array');
        expect(response.body[0]).to.be.property('usinas');
      });
    });
    describe('Busca por id especifico', () => {
      
      let response;
  
      before(async () => {
        const user = await chai.request(server)
          .post('/api/users')
          .send({
            name: 'Serena Gomez',
            email: 'serenagomez@gmail.com',
            password: '123456',
            role: 'user'
          });
        const { body: { id } } = user;
        response = await chai.request(server)
          .get(`/api/users/${id}`);
      });
  
      it('propriedade "id"', () => {
        expect(response.body).to.be.an('object');
        expect(response.body['_id']).to.be.an('string');
        expect(response.body).to.be.property('_id');
        expect(response).to.have.status(200);
      });
      it('propriedade "name"', () => {
        expect(response.body['name']).to.be.an('string');
        expect(response.body['name']).to.be.equal('Serena Gomez');
        expect(response.body).to.be.property('name');
      });
      it('propriedade "email"', () => {
        expect(response.body['email']).to.be.an('string');
        expect(response.body['email']).to.be.equal('serenagomez@gmail.com');
        expect(response.body).to.be.property('email');
      });
      it('propriedade "role"', () => {
        expect(response.body['role']).to.be.an('string');
        expect(response.body['role']).to.be.equal('user');
        expect(response.body).to.be.property('role');
      });
      it('propriedade "usinas"', () => {
        expect(response.body['usinas']).to.be.an('array');
        expect(response.body).to.be.property('usinas');
      });
    });
  
    describe('Falha ao buscar por id especifico', () => {
      let response;
  
      before(async () => {
        response = await chai.request(server)
          .get('/api/users/9999');
      });
  
      it('rota com "id" invalido', () => {
        expect(response.body).to.be.an('object');
        expect(response.body['message']).to.be.an('string');
        expect(response.body).to.be.property('message');
        expect(response.body['message']).to.be.equal('User not found!');
        expect(response).to.have.status(404);
      });
    });
  });
});