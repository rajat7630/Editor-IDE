const {RestDataSource} =require("apollo-datasource-rest");
class ProblemAPI extends RestDataSource{
    constructor()
    {
        super();
        this.baseURL='http://localhost:5000/'
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