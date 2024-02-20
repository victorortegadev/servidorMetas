/*var express = require('express');
var router = express.Router();
const {pedirMarca,pedirMetas,pedirMeta, crearMeta, actualizarMeta, borrarMeta} = require('../metasDB/metasDB')*/

/*const meta = {   
  sticker : '🏃‍♂️',
  frecuencia: 'mes',
  plazo: 'hola',
  meta:'volar',
  fecha:'01/02/2020',
  completado:25,
  total: 30
}*/

/* GET users listing. */
/*router.get('/marca', function(req, res, next) {
  pedirMarca((error, data) =>{
    if(error){
      //return next(error)
      return res.send('tiempo y hora error')
    }
    return res.send(data)
  })
});

router.get('/metas', function(req, res, next) {
  pedirMetas('metas', (error, data) =>{
    if(error){
      return next(error)
    }
    return res.send(data)
  })
});

router.get('/meta/:id', function(req, res, next) {
  const id = req.params['id']
  pedirMeta('metas',id, (error, data) =>{
    if(error || !data){
      return next(error)
    }
    return res.send(data)
  })
});

router.post('/meta', function(req, res, next) {
  const meta = req.body
    crearMeta('metas', meta, (error,data) => {
      if(error){
        return next(error)
      }
      return res.send(data)
    })
});

router.put('/meta/:id', function(req, res, next) {
  const meta = req.body
  const id = req.params['id']
  if(meta.id != id){
    res.status(409).send();
  }
  pedirMeta('metas',id, (error, data) =>{
    if(error || !data){
      return next(error)
    }
    actualizarMeta('metas', meta, (error,data) => {
      if(error){
        return next(error)
      }
      return res.send(data)
    })
  })
});

router.delete('/meta/:id', function(req, res, next) {
  const id = req.params['id']
  
  pedirMeta('metas',id, (error, data) =>{
    if(error || !data){
      return next(error)
    }
    borrarMeta('metas', id, (error,data) => {
      if(error){
        return next(error)
      }
      return res.send(`meta ${id} borrada`)
    })*/
  })

});

module.exports = router;
