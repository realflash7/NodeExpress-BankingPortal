const express=require('express');
const router=express.Router();
const {accounts,writeJSON }=reqire('../data');

router.get('/transfer',(req,res) => { res.render('transfer')});

router.post('/transfer', (req,res) => {

  accounts[req.body.from].balance-=req.body.amount;
  accounts[req.body.to].balance= parseInt(accounts[req.body.to].balance)+parseInt(req.body.amount,10);
     writeJSON();
    res.render('transfer' ,{ message: 'Transfer Completed'});
});


router.get('/payment',(req,res) => { res.render('payment', {account: accounts.credit});
 });

router.post('/payment', (req,res) => {

  accounts.credit.balance-=req.body.amount;
  accounts.credit.available= parseInt(accounts.credit.available)+parseInt(req.body.amount,10);
     writeJSON();
     res.render('payment' ,{ message: 'Payment Successfull ',   account: accounts.credit });
});

module.exports=router;
