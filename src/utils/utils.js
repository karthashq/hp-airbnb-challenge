

// function to generate random true or false
export const getRandomBool = () =>{
    return Math.random() < 0.5
  };
  
  
  // function to generate random date range
export const getRandomDateRange = () =>{
  
    const getRandomDate = ()=>{
      const date = (new Date(new Date() - Math.random()*(1e+12)));
      return `${date.toLocaleString('default', { month: 'short' })} ${date.getDay()+1}`;
    };
  
    return `${getRandomDate()} - ${getRandomDate()}`;
  };


  export const  getFormattedNumber = (number) =>{
    return Intl.NumberFormat("en").format(number);
  }
  