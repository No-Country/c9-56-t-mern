import pawfulApi from "../api/pawfulApi";

export const registerUSerStore = () => {

    const addUSer = async ({ email, password, avatar, role }) => {
        try {
            const { data } = await pawfulApi.post('/users', { email, password, avatar, role });
        } catch (error) {

        }
    }

    return{


        addUSer
    }
}