import { Router } from 'express';
import { myContract, account } from '../instance.js';
const router = Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

router.get('/view', function (req, res) {
  let data = {
    course: '<Course>',
    certificateID: '<ID>',
    name: '<Name>',
    grade: '<Grade>',
    date: '<Date>',
  };
  res.render('viewCertificate', { data: data });
});

router.get('/issue', function (req, res) {
  res.render('issueCertificate', {
    formClass: '',
    messageClass: 'hidden',
    certificateID: '<ID>',
  });
});

router.post('/issue', async function (req, res) {
  let data = req.body;
  console.log(data);

  const txn = await myContract.methods
    .issue(data.certificateID, data.name, data.course, data.grade, data.date)
    .send({ from: account, gasLimit: '927000' });
  console.log(txn);

  res.render('issueCertificate', {
    formClass: 'hidden',
    messageClass: '',
    certificateID: data.certificateID,
  });
});

router.post('/view', async function (req, res) {
  let data = req.body;
  console.log(data);

  const result = await myContract.methods
    .Certificates(data.certificateID)
    .call();
  result.certificateID = data.certificateID;
  console.log(result);

  res.render('viewCertificate', { data: result });
});

router.get('/records', function (req, res) {
  res.render('viewRecords', {
    data: [],
    message: '',
  });
});

router.post('/records', async function (req, res) {
  const course = req.body.course;
  console.log(course);

  const results = await myContract.getPastEvents('Issued', {
    filter: { course: course },
    fromBlock: 0,
    toBlock: 'latest',
  });
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  const returnValues = results.map((el) => {
    return el.returnValues;
  });
  console.log(returnValues);

  if (returnValues.length) {
    res.render('viewRecords', {
      course: course,
      data: returnValues,
    });
  } else {
    res.render('viewRecords', {
      data: returnValues,
      message: `Certificates issued in ${course}: ${returnValues.length}`,
    });
  }
});

export default router;
