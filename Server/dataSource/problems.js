const {RestDataSource} =require("apollo-datasource-rest");
class ProblemAPI extends RestDataSource{
    constructor()
    {
        super();
        this.baseURL='http://server.rajat.local/'
    }

    async getAllProblems(){
        const response= await this.get("Problems");
        return response;
    }

    async getProblemByID(ProblemID)
    {
        const response= await this.get("Problems", {id:ProblemID})
        return response;
    }
}

module.exports=ProblemAPI;