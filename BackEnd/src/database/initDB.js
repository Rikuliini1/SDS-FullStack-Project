import mongoose from 'mongoose'

const connectToDatabase = async () => {
    try {
        console.log('    Connecting to database...'.yellow)
        // TODO
        console.log('        MongoDB connected'.green)
    } catch (error) {
        console.log('        Error while connecting to database\n'.red)
        console.log(error)
        process.exit(1)
    }
}

export default connectToDatabase

// EOF
