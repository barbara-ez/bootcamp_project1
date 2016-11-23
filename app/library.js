app={

computeAverage: function(a,b,c)
            {
            var result=0;
            result=(a+b+c)/3;
            return result;
            },

computeFactorial: function(n)
            {
                  if (n==1)
                  {
                    return 1;
                    
                  }
                  else
                  {
                    return(n*(app.computeFactorial(n-1)));

                  }
                  
                  
            },
convertTempFtoC: function(f)
            {
            var c=0;
            c=(5/9)*(f-32);
            return c;
            
            },
            
convertTempCtoF: function(c)
            {
            var f=0;
            f=((9/5)*c)+32;
            return f;
            
            }


}

module.exports = app;