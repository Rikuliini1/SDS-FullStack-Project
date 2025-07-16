import ListModel from '../../database/models/listModel.js'

// @desc    Get all lists
// @route   GET /api/list/get_lists
// @access  Private
const getLists = async (req, res) => {
    console.log('    Doing stuff...'.yellow)
    // TODO
    console.log('        Successful GET request to get all lists\n'.green)
}

// @desc    Create a new list
// @route   POST /api/list/create_list
// @access  Private
const createList = async (req, res) => {
    console.log('    Doing stuff...'.yellow)
    // TODO
    console.log('        Successful POST request to create a new list\n'.green)
}

// @desc    Delete a list
// @route   DELETE /api/list/delete_list
// @access  Private
const deleteList = async (req, res) => {
    console.log('    Doing stuff...'.yellow)
    // TODO
    console.log('        Successful DELETE request to delete a list\n'.green)
}

export { getLists, createList, deleteList }

// EOF
