import React from 'react';

class ErrorBoundary extends React.Component{
     constructor(props){
         super(props);
          this.state={hasError:false};//initially no any error we assume 
     }
     
   static getDerivedStateFromError(error){//make static function 
 return {hasError:true};//object return with key hasError 

   }

   render(){
     if(this.state.hasError){//if any error got then this display 
        return <h1 className='text-4xl text-red-600'>Something went Wrong</h1>
     }

     return this.props.children;//basically here our children return when we wrap this any component 
   }


}

export default ErrorBoundary;