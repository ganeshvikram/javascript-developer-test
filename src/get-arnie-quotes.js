const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.

  let results = [];

  const urlResults =  urls.map(async (link)=>{

      //Call httpGet from interface
      const result = await httpGet(link); 
      const body = JSON.parse(result.body).message;

      (result.status == 200) ? results.push({"Arnie Quote":body}) : results.push({"FAILURE":body});

  })
  //Wait to resolve all promises
   await Promise.all(urlResults);
   return results;
};

module.exports = {
  getArnieQuotes,
};
