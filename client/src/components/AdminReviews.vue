<template>
  <div>
    <section class="add">
      <h2>Добавить новый отзыв</h2>
      <div class="add__form">
        <input type="date" class="form" v-model="date">
        <input type="number" class="add__input" placeholder="Рейтинг" min="0" max="5" v-model="count">
        <input type="text" class="add__input" placeholder="Имя" v-model="author">
        <textarea type="text" class="add__input" placeholder="Отзыв" v-model="review"></textarea>
        <input type="text" class="add__input" placeholder="Ссылка на Яндекс" v-model="path">
        <button class="add__button" @click="add_new_review">Добавить</button>
      </div>
    </section>
    <section class="reviews">
      <div class="reviews__head">
        <h2>Актуальные отзывы</h2>
        <button class="reviews__button"
                v-if="$store.state.reviews && $store.state.reviews.length > 0"
                @click="delete_all"
        >
          Удалить все отзывы
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#D2317C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
        </button>
      </div>
      <ul class="reviews__list" v-if="$store.state.reviews.length > 0">
        <li class="reviews__item"
            v-for="review of $store.state.reviews"
            :key="review._id"
        >
          <div class="reviews__card">
            <div class="reviews__card__head">
              <span class="reviews__card__name">
                <input class="input" type="text" v-model="review.author">
              </span>
              <div class="reviews__card__info">
                <input class="input" type="number" v-model="review.count" style="width: 55px; margin-right: 10px">
                <div class="reviews__card__date">
                  <input class="input" type="text" v-model="review.date.split('T')[0]">
                  {{ review.date.split('T')[0] }}
                </div>
              </div>
            </div>
            <div class="reviews__card__body">
              <textarea class="input" v-model="review.review" style="width: 100%"></textarea>
              <span class="reviews__card__link" style="width: 100%">
                Отзыв на
                <input class="input" type="text" v-model="review.path" style="width: 100%">
              </span>
            </div>
            <button class="reviews__delete" @click="delete_one(review)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trash_Empty"> <path id="Vector" d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#EC232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            </button>
            <button class="reviews__edit" @click="update(review)">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#F58220" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#F58220" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> </g> </g> </g> </g></svg>
            </button>
          </div>
        </li>
      </ul>
      <span v-else>Отзывов нет</span>
    </section>
  </div>
</template>

<script>
export default {
  name: "AdminReviews",
  data () {
    return {
      author: '',
      review: '',
      count: Number,
      path: '',
      date: '',
    }
  },
  methods: {
    async add_new_review () {
      const data = {
        author: this.author,
        review: this.review,
        count: this.count,
        path: this.path,
        date: this.date,
      }
      const response = await fetch('/api/reviews/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.status === 200) {
        const response = await fetch('/api/reviews/get');
        const payload = await response.json();
        this.$store.commit('set_reviews', payload);
      }
    },
    async delete_one (item) {
      const response = await fetch(`/api/reviews/delete/${item._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.status === 200) {
        const response = await fetch('/api/reviews/get');
        const payload = await response.json();
        this.$store.commit('set_reviews', payload);
      }
    },
    async update (item) {
      const data = {
        author: item.author,
        review: item.review,
        count: Number(item.count),
        path: item.path,
        date: item.date
      };

      const response = await fetch(`/api/reviews/update/${item._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.status === 200) {
        const response = await fetch('/api/reviews/get');
        const payload = await response.json();
        this.$store.commit('set_reviews', payload);
      }
    },
    async delete_all () {
      const response = await fetch('/api/reviews/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.status === 200) {
        const response = await fetch('/api/reviews/get');
        const payload = await response.json();
        this.$store.commit('set_reviews', payload);
      }
    }
  },
  mounted() {
    this.$store.dispatch('get_reviews')
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

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    padding: 20px;
    border-radius: 20px;
    background-color: #FAFAFA;
  }
  &__input {
    width: 100%;
    padding: 7px 14px;
    border-radius: 5px;
    border: 2px solid $red_light;
  }
  &__button {
    align-self: end;
    background-color: $blue;
    padding: 10px 20px;
    border-radius: 10px;
    color: #FFFFFF;
  }
}
.reviews {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;

  &__head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  &__list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  &__item {
    height: fit-content;
  }
  &__card {
    background: #FAFAFA;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    padding: 24px 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 590px;
    width: 100%;
    height: fit-content;
    position: relative;

    &__head {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 4px;
    }
    &__name {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;

      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 5px;
    }
    &__info {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    &__date {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    }
    &__body {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 20px;
    }
    &__review {
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
    }
    &__link {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;

      a {
        color: $rose_light
      }
    }
  }
  &__edit {
    position: absolute;
    top: 10px;
    right: 40px;
  }
  &__delete {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .input {
    border-radius: 5px;
    padding: 5px 10px;
    border: 2px solid $red_light;
  }
}
</style>