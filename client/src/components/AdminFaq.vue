<template>
  <div id="admin_faq">
    <section class="add">
      <div class="add__head">
        <h1 class="add__title">Вопросы</h1>
      </div>
      <div class="add__content">
        <h2 class="add__subtitle">Добавить новый вопрос</h2>

        <div class="add__form">
          <div class="add__form__box">
            Ворпрос: <input type="text" placeholder="Вопрос.." v-model="question">
          </div>
          <div class="add__form__box">
            Ответ: <input type="text" placeholder="Вопрос.." v-model="answer">
          </div>
          <button class="add__form__button" @click="add_one_faq">
            Добавить
          </button>
        </div>
      </div>
    </section>
    <section class="faq">
      <div class="faq__head">
        <h2 class="actual__subtitle">Актуальные вопросы</h2>
        <button class="faq__button"
                v-if="$store.state.faqs && $store.state.faqs.length > 0"
                @click="delete_all_faqs"
        >
          Удалить все вопросы
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#D2317C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
        </button>
      </div>
      <div class="faq__content">
        <ul class="faq__list">
          <li class="faq__item"
              v-for="item of $store.state.faqs"
              :key="item._id"
          >
            <div class="faq__card">
              <div class="faq__card__question">
                <input class="faq__card__input" type="text" v-model="item.question">
                <div class="faq__card__buttons">
                  <button class="faq__card__delete" @click="delete_one_faq(item)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#EC232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                  </button>
                  <button class="faq__card__edit" @click="edit_one_faq(item)">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#F58220" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#F58220" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> </g> </g> </g> </g></svg>
                  </button>
                </div>
              </div>
              <div class="faq__card__answer"
                   v-for="(ans, index) of item.answer"
                   :key="index"
              >
                <div class="faq__card__inner"
                     v-if="ans.type === 'text'"
                >
                  <span>Абзац</span>
                  <input class="faq__card__input" type="text" v-model="ans.value">

                </div>
                <div class="faq__card__inner" v-if="ans.type === 'list'" >
                  <span>Список</span>
                  <div v-for="(i, index) of ans.value"
                       :key="index"
                       style="width: 100%"
                  >
                    <input class="faq__card__input" v-model="ans.value[index]">
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "AdminFaq",
  data () {
    return {
      question: '',
      answer: ''
    }
  },
  methods: {
    async delete_all_faqs () {
        const response = await fetch('/api/faqs/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response.json());

        if(response.status === 200) {
          const response = await fetch('/api/faqs/get');
          const payload = await response.json();
          this.$store.commit('set_faqs', payload);
        }
    },
    async delete_one_faq (item) {
      const response = await fetch(`/api/faqs/delete/${item._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.json());

      if(response.status === 200) {
        const response = await fetch('/api/faqs/get');
        const payload = await response.json();
        this.$store.commit('set_faqs', payload);
      }
    },
    async edit_one_faq (item) {
      const data = {
        question: item.question,
        answer: item.answer
      };

      const response = await fetch(`/api/faqs/update/${item._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if(response.status === 201) {
        const response = await fetch('/api/faqs/get');
        const payload = await response.json();
        this.$store.commit('set_faqs', payload);
      }
    },
    async add_one_faq () {
      const response = await fetch('/api/faqs/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({question: this.question, answer: [{type: 'text', value: this.answer}]})
      })

      if(response.status === 200) {
        const response = await fetch('/api/faqs/get');
        const payload = await response.json();
        this.$store.commit('set_faqs', payload);
      }
    },

  },
  mounted() {
    this.$store.dispatch('get_faqs')
  }
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.add {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;

  &__head {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  &__title {
    font-weight: 700;
    font-size: 26px;
    line-height: 130%;
    text-transform: uppercase;
  }
  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    padding: 20px;
    background-color: $red_light;
    border-radius: 20px;

    &__box {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 20px;
    }
    input {
      width: 100%;
      padding: 7px 20px;
      border-radius: 7px;
      background: #FFFFFF;
      border: 2px solid $rose_light;
    }
    &__button {
      align-self: end;
      background-color: $rose_light;
      color: #FFFFFF;
      border-radius: 5px;
      padding: 10px 20px;
    }
  }
}
.faq {
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  &__head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
  }
  &__button {
    padding: 10px 20px;
    border-radius: 10px;
    background-color: rgba(236, 35, 43, 0.2);
    color: $rose_light;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    transition: all .3s ease;

    &:hover {
      background-color: rgba(236, 35, 43, 0.4);
    }
  }
  &__content {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
  }
  &__item {
    width: 100%;
  }
  &__card {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    padding: 20px;
    background-color: $red_light;
    border-radius: 20px;

    &__question {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__buttons {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-left: 30px;
    }
    &__answer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;
    }
    &__inner {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 5px;
    }
    &__input {
      width: 100%;
      padding: 7px 20px;
      border-radius: 7px;
      background: #FFFFFF;
      border: 2px solid $rose_light;
      
      &:disabled{
        background: transparent;
        border: none;
      }
    }
  }

}
</style>