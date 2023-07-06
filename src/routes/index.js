import { Router } from 'express';
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

export default router;
