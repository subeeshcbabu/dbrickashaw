import caller from 'caller';
import Publisher from './lib/publisher';
import Logger from './lib/logger';

const PUBLISHER = new Publisher();

if (!global.__dbrickashaw) {
    global.__dbrickashaw = {};
}

export default {

    getPublisher() {
        return PUBLISHER;
    },

    getPublisherAggregate() {
        return global.__dbrickashaw;
    },

    createLogger(name = caller()) {
        let logger = new Logger(name);
        this.getPublisher().observe(logger);
        return logger;
    }

};

module.exports = exports.default;
