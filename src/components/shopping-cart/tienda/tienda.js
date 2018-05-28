import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../../assets/css/style.css';

class Tienda extends Component {
  constructor(){
    super();
    this.state={
      mensaje: 'Carrito de Compras',
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      producto:[
              {blanca:'/static/images/products/tiendus_1468520877.jpg'},
              {gris:'/static/images/products/tiendus_1468538565.jpg'},
              {roja:'/static/images/products/tiendus_1469773429.jpg'}              
              ],
      items:[
          {precio:"11$" },
          {precio:"30$" },
          {precio:"13$" },
          {precio:"40$" },
        ]
    }
  }
    
  render() {

    return (

      <div class="container text-center">
        <div  className="row">
          <div className="col-md-12">
            <h1>{this.state.mensaje}</h1>
          </div>
        </div><br/><br/><br/>
        <div id ="products" >

          <div class="row col-md-12">
          <div class="col-xls-4 col-sm-3 col-md-offset-0" >

            <div class="white-panel st">
              <figure>
                <img class="" src={this.state.producto[0].blanca} alt="Test"  />
              </figure>
              <div class="col-xls-6">
                <div >
                  <p>{this.state.descripcion}</p>
                  <h3><span class="label label-success">Precio: {this.state.items[0].precio}</span></h3>
                  <p>
                    <a href="#" class="btn btn-warning col-md-6"><i class="fa fa-cart-plus"></i> La quiero</a> 
                    <a href="#" class="btn btn-primary col-md-6"> <i class="fa fa-chevron-circle-right"></i> Leer mas</a>
                  </p>                
                </div>
              </div>
            </div>





          </div>

          <div class="col-xls-4 col-sm-3 col-md-offset-4 white-panel st" >
            <figure>
              <img class="" src={this.state.producto[1].gris} alt="Test"  />
            </figure>
            <div class="col-xls-6">
              <div >
                <p>{this.state.descripcion}</p>
                <h3><span class="label label-success">Precio: {this.state.items[1].precio}</span></h3>
                <p>
                  <a href="#" class="btn btn-warning col-md-6"><i class="fa fa-cart-plus"></i> La quiero</a> 
                  <a href="#" class="btn btn-primary col-md-6"> <i class="fa fa-chevron-circle-right"></i> Leer mas</a>
                </p>                
              </div>
            </div>
          </div>


          <div class="col-xls-4 col-sm-3 col-md-offset-8 white-panel st" >
            <figure>
              <img class="" src={this.state.producto[2].roja} alt="Test"  />
            </figure>
            <div class="col-xls-6">
              <div >
                <p>{this.state.descripcion}</p>
                <h3><span class="label label-success">Precio: {this.state.items[2].precio}</span></h3>
                <p>
                  <a href="#" class="btn btn-warning col-md-6"><i class="fa fa-cart-plus"></i> La quiero</a> 
                  <a href="#" class="btn btn-primary col-md-6"><i class="fa fa-chevron-circle-right"></i> Leer mas</a>
                </p>                
              </div>
            </div>
          </div>

          </div>
          



        </div>
      </div>



  )

  }
}


export default Tienda;