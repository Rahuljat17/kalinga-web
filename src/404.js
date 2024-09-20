import React from "react";
import "./404.css"
export default class Error extends React.Component{
    render(){
        return(
            <section class="page_404">
            <div class="container">
              <div class="row"> 
              <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <center>

                <h1 class="text-center ">404</h1>
                </center>
              
              
              </div>
              
              <center class="contant_box_404">
              <h3 class="h2">
              Look like you're lost
              </h3>
              
              <p>the page you are looking for not avaible!</p>
              
              <a href="/" class="link_404">Go to Home</a>
            </center>
              </div>
              </div>
              </div>
            </div>
          </section>
        
           
        )
    }
}