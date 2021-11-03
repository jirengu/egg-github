const App = {
  data() {
    return {
      list: []
    }
  },
  async created() {
    let data = await(await fetch('/news')).json()
    console.log(data)
    this.list = data.items
  }
}

Vue.createApp(App).mount('main')