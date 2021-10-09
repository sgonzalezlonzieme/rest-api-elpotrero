//import { response } from "express";
//import { request } from "http";

function success (req: any, res: any) {
  //res.send('success')
  //console.log(req.query)
  
  // res.json({
  //   collection_id:  req.query.collection_id ,
  //   collection_status:  req.query.collection_status ,
  //   payment_id:  req.query.payment_id ,
  //   status:  req.query.status ,
  //   external_reference:  req.query.external_reference ,
  //   payment_type:  req.query.payment_type ,
  //   merchant_order_id:  req.query.merchant_order_id ,
  //   preference_id:  req.query.preference_id ,
  //   site_id:  req.query.site_id ,
  //   processing_mode:  req.query.processing_mode ,
  //   merchant_account_id:  req.query.merchant_account_id
  // })

  const response = {
    collection_id: '1242166867',
    collection_status: 'approved',
    payment_id: '1242166867',
    status: 'approved',
    external_reference: 'null',
    payment_type: 'credit_card',
    merchant_order_id: '3383877828',
    preference_id: '672708410-fe48aca4-8046-44c7-84d5-e522cec53250',
    site_id: 'MLA',
    processing_mode: 'aggregator',
    merchant_account_id: 'null'
  }
  res.json(response);
}

export default success;