const es = require("elasticsearch");
const esClient = new es.Client({
	host: "http://34.98.117.162",
	log: "trace",
});

const fetchPostLogToEs = async function ({ indexName, mappingType, mapping }) {
	return await esClient.index({
		index: "digiv-log",
		type: "log",
		body: {
			user_id: "A00-3",
			message: "yayan ganteng",
		},
	});
};

const postLogEs = async function (req, res) {
	const body = {
		user_id: "A00-3",
		message: "saya ganteng",
	};

	try {
		const postToEs = await fetchPostLogToEs({
			indexName: "digiv-log",
			mappingType: "mappingType",
			body,
        });
        res.json(postToEs)
	} catch (error) {
        res.json(error)
    }
    res.end()
};

// const pingEs = (req,res)=> {
//     esClient.ping({
//         requestTimeout: 1000
//     },(error)=> {
//         let resData = {error: false }
//         if(error){
//             resData.error = true
//         }

//         res.json(resData)
//         res.end()
//     })

// }

module.exports = postLogEs;
