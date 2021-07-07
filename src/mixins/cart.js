import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default () => {
        const store = useStore();
        const router = useRouter();
        onMounted(() => store.dispatch('book/loadBooks'));
        const products = computed(() => store.getters[`book/getBooksList`]);

        const handleClick = () => {
            router.push('/cart');
        };
        return { products, handleClick }
}