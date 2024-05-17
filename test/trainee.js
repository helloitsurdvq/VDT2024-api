const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const app = require("../index");

process.env.NODE_ENV = "test";
chai.use(chaiHttp);

describe("Trainees", () => {
  beforeEach((done) => {
    //Before each test we empty the database
    done();
  });
  describe("/GET trainees", () => {
    it("It should GET all the trainees", (done) => {
      chai
        .request(app)
        .get("/api/trainee")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
        //   res.body.length.should.be.eql(9); // fixme :)
          done();
        });
    });
  });
});
