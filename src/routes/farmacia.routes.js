import { Router } from 'express';
import { OrdenVenta } from '../model/OrdenVenta.js';
import { DetalleOrdenVta } from '../model/DetalleOrdenVta.js';

const router = Router();

router.get('/farmacia', async (req, res) => {
  try {

    const detalles = await OrdenVenta.findAll({
      include: [
        {
          model: DetalleOrdenVta,
          as: 'detalles',  
        },
      ],
    });

    
    const ordenesJSON = detalles.map(orden => orden.toJSON());

    res.render('farmacia/list', { ordenes: ordenesJSON });

  } catch (error) {
    console.error('Error al obtener los detalles:', error);
    res.status(500).send('Error al obtener los detalles');
  }
});

export default router;
