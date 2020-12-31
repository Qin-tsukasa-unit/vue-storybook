<template>
  <div>
    <nav>
      <my-button
        size="small"
        @onClick="isMenuOpen = !isMenuOpen"
        :label="text"
      />
    </nav>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div v-if="isMenuOpen" class="relative">
        <ul :class="classes" class="absolute origin-top-left left-0 mt-2 list-none p-0 rounded-md overflow-hidden border border-gray-400 border-solid bg-white shadow-md z-20">
          <li v-for="(value, key) in items" :key="key" class="border-t border-b-0 border-l-0 border-r-0 border-gray-300 border-solid my-0 overflow-hidden">
            <a
              :href="value.href"
              @click="isMenuOpen = false"
              class="block w-full py-1 px-2 text-center no-underline cursor-pointer text-gray-600 hover:text-white bg-white hover:bg-gray-600"
            >
              {{ value.text }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import MyButton from "../../button/Button.vue";

export default {
  components: { MyButton },
  data() {
    return {
      isMenuOpen: false,
      items: [
        {
          text: "メニュー１",
          href: "javascript:;",
        },
        {
          text: "メニュー２",
          href: "javascript:;",
        },
        {
          text: "メニュー３",
          href: "javascript:;",
        },
      ],
    };
  },
  props: {
    text: String,
    size: {
      type: String,
      default: "",
      validator(val) {
        return ["", "medium", "large"].indexOf(val) + 1;
      },
    },
  },
  computed: {
    classes() {
      return {
        'w-5/12': this.size === '',
        'w-80': this.size === 'medium',
        'w-full': this.size === 'large',
      };
    },
  },
  methods: {
    closeMenu: function () {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
