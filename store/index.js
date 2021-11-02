import axios from '~/plugins/axios'
export const state = () => ({
    emailProvider: {
        service: 'gmail',
        username: 'dinashke1@gmail.com',
        password: '326qaz159wsx487'
    }
})

export const mutations = {
    setNewEMailProvider(state, payload) {
        state.emailProvider = payload
    }
}

export const getters = {
    emailProvider(state) {
        return state.emailProvider
    }
}

export const actions = {
    async sendEmail({ state, commit }, payload) {

        let emailInfo = payload
        let emailProvider = state.emailProvider

        if (emailProvider.username !== '' && emailProvider.password !== '') {
            try {
                const { res } = await axios.post('/api/nodemailer', {
                    emailInfo,
                    emailProvider
                })
                console.log(res)
                alert('Message send successfully')
            } catch (e) {
                alert(e)
            }
        }
    }
}
