const nodeUtils =  require("@suezenv/sm-node-utils");

class Data {
    constructor(config) {
        this.config = config;
        this.logger = new nodeUtils.Logger(config.logger);
    }

    connect() {
        this.logger.info(`Connected to database <${this.config.database}>`);
    }

    disconnect() {
        this.logger.info(`Disconnected from <${this.config.database}>`);
    }

    read(tableName, selection, filter) {
        return [
            {
                nom: "DURANT",
                prenom: "Paul",
                age: 21
            },
            {
                nom: "CAMARA",
                prenom: "David",
                age: 23
            },
            {
                nom: "Sylla",
                prenom: "Toto",
                age: 25
            }
        ];
    }
}


module.exports = {
    Data: Data
};
