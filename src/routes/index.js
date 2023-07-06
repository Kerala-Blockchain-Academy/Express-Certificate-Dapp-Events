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

export default router;
