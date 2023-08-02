import { createStore } from 'vuex'

interface IStops {
  line: number,
  stop: string,
  order: number,
  time: string
}

export default createStore({
  state: {
    data: [],
  },
  getters: {
    stops(state) {
      return [... new Set(state.data.map((el: IStops): string => el.stop))] 
    },
    lines(state) {
      return [... new Set(state.data.map((el: IStops): number => el.line))].sort((a,b) => a-b)
    },
  },
  mutations: {
    setData(state, data) {
      state.data = data
    },
  },
  actions: {
    fetchAllData(context) {
      return fetch('http://localhost:3000/stops')
        .then((response: Response): Promise<Array<IStops>> => response.json())
        .then((data: Array<IStops>): void => context.commit("setData", data))
        .catch((error) => console.error(error))
    }
  },
  modules: {
  }
})
