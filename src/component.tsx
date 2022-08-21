import { defineComponent, ref } from 'vue'

export const component = defineComponent({
  name: 'Component',
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const count = ref(0)
    const increment = () => count.value++
    return () => (
      <div>
        <h1 className="text-red">{props.title}</h1>
        <p>{props.content}</p>
        <div onClick={increment}>
          count: {count.value}
        </div>
      </div>
    )
  },
})
