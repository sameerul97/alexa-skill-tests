const Alexa = require('ask-sdk-core');
const { DynamoDbPersistenceAdapter } = require('ask-sdk-dynamodb-persistence-adapter');

const LaunchRequestHandler = {
	canHandle(handlerInput) {
		return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
	},

	async handle(handlerInput) {
		const response = handlerInput.responseBuilder;
		const persistentAttributes = await handlerInput.attributesManager.getPersistentAttributes()
		console.log(persistentAttributes);

		return response
			.speak('Skill launched')
			.reprompt('Skill launched')
			.getResponse();
	},
};

const persistenceAdapter = new DynamoDbPersistenceAdapter({
	tableName: 'test-table',
});

let skill;

exports.handler = async function (event, context) {
	console.log(`REQUEST: ${JSON.stringify(event)}`);
	if (!skill) {
		skill = Alexa.SkillBuilders.custom()
			.addRequestHandlers(LaunchRequestHandler)
			.withPersistenceAdapter(persistenceAdapter)
			.create();
	}

	const response = await skill.invoke(event, context);
	console.log(`RESPONSE: ${JSON.stringify(response)}`);

	return response;
};

