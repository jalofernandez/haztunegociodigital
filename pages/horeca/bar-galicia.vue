<template>
  <main :class="['horeca', business.short, { 'aside-menu-open': showAside }]">
    <!-- BTN :: floating one to trigger aside -->
    <!-- <button class="button js-aside" type="button" @click="showAside = !showAside">
      <span class v-if="!showAside">Abrir secciones +</span>
      <span class v-else>Cerrar secciones X</span>
    </button> -->

    <Modal
      :class="{ 'md-show': isModalVisible }"
      @close="closeModal()"
      :data="business.schedule"
      v-if="business.schedule"
    />

    <!-- ASIDE :: to navigate across dishes sections -->
    <nav class="aside-menu with-anim">
      <h2 class="icon icon-lab">Bar Galicia</h2>
      <ul>
        <li>
          <a class="icon icon-data" href="#">Menú del día</a>
        </li>
        <li>
          <a class="icon icon-location" href="#">Raciones</a>
        </li>
        <li>
          <a class="icon icon-study" href="#">Bocadillos y Montados</a>
        </li>
        <li>
          <a class="icon icon-photo" href="#">Desayunos</a>
        </li>
        <li>
          <a class="icon icon-wallet" href="#">Cervezas</a>
        </li>
        <li>
          <a class="icon icon-wallet" href="#">Vinos</a>
        </li>
        <li>
          <a class="icon icon-wallet" href="#">Bebidas</a>
        </li>
        <li>
          <a class="icon icon-wallet" href="#">Licores y Combinados</a>
        </li>
      </ul>
    </nav>

    <!-- MODALS :: each dish item modal dialog to shown info details -->
    <!-- modals to 01 items list (menus) -->
    <div v-for="(menu, index) in business.menus" :key="index" :class="['modal-wrapper', { 'md-show': menu.show }]">
      <div :id="`modal-${menu.id}`" class="md-modal has-dish">
        <div class="md-content dish info">
          <button class="button js-close" type="button" @click="menu.show = false">Cerrar <span>&times;</span></button>
          <div
            class="img cover"
            :style="{
              'background-image':
                'url(' + require(`@/assets/negocios/${business.short}/${business.short}-${menu.img}.jpg`) + ')',
            }"
            v-if="menu.img"
          ></div>
          <div class="details">
            <h4 class="name">{{ menu.name }}</h4>
            <p class="desc" v-if="menu.desc">{{ menu.desc }}</p>
            <div class="prices">
              <div class="price item" v-for="(price, index) in menu.prices" :key="index">
                <small class="price name">{{ price.name }}</small>
                <span class="price quantity">
                  <b>{{ price.price }}</b> €
                </span>
              </div>
            </div>
            <div class="allergens prices" v-if="menu.allergens">
              <div class="price item" v-for="(allergen, index) in menu.allergens" :key="index">
                <small class="helper">{{ allergen }}</small>
                <img
                  class="allergen"
                  :src="require(`~/assets/allergens/${allergen}.svg`)"
                  :title="'Alérgeno: ' + allergen"
                  :alt="'Alérgeno: ' + allergen"
                  width="30"
                  height="30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="['modal-overlay', { 'md-show': menu.show }]" @click="menu.show = false"></div>
    </div>
    <!-- modals to 02 items list (dishes) -->
    <div
      v-for="(dish, index) in business.dishes"
      :key="'A' + index"
      :class="['modal-wrapper', { 'md-show': dish.show }]"
    >
      <div :id="`modal-${dish.id}`" class="md-modal has-dish">
        <div class="md-content dish info">
          <button class="button js-close" type="button" @click="dish.show = false">Cerrar <span>&times;</span></button>
          <div
            class="img cover"
            :style="{
              'background-image':
                'url(' + require(`@/assets/negocios/${business.short}/${business.short}-${dish.img}.jpg`) + ')',
            }"
            v-if="dish.img"
          ></div>
          <div class="details">
            <h4 class="name">{{ dish.name }}</h4>
            <p class="desc" v-if="dish.desc">{{ dish.desc }}</p>
            <div class="prices">
              <div class="price item" v-for="(price, index) in dish.prices" :key="index">
                <small class="price name">{{ price.name }}</small>
                <span class="price quantity">
                  <b>{{ price.price }}</b> €
                </span>
              </div>
            </div>
            <div class="allergens prices" v-if="dish.allergens">
              <div class="price item" v-for="(allergen, index) in dish.allergens" :key="index">
                <small class="helper">{{ allergen }}</small>
                <img
                  class="allergen"
                  :src="require(`~/assets/allergens/${allergen}.svg`)"
                  :title="'Alérgeno: ' + allergen"
                  :alt="'Alérgeno: ' + allergen"
                  width="30"
                  height="30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="['modal-overlay', { 'md-show': dish.show }]" @click="dish.show = false"></div>
    </div>
    <!-- modals to 03 items list (breakfast) -->
    <div
      v-for="(cup, index) in business.breakfast"
      :key="'B' + index"
      :class="['modal-wrapper', { 'md-show': cup.show }]"
    >
      <div :id="`modal-${cup.id}`" class="md-modal has-dish">
        <div class="md-content dish info">
          <button class="button js-close" type="button" @click="cup.show = false">Cerrar <span>&times;</span></button>
          <div
            class="img cover"
            :style="{
              'background-image':
                'url(' + require(`@/assets/negocios/${business.short}/${business.short}-${cup.img}.jpg`) + ')',
            }"
            v-if="cup.img"
          ></div>
          <div class="details">
            <h4 class="name">{{ cup.name }}</h4>
            <p class="desc" v-if="cup.desc">{{ cup.desc }}</p>
            <div class="prices">
              <div class="price item" v-for="(price, index) in cup.prices" :key="index">
                <small class="price name">{{ price.name }}</small>
                <span class="price quantity">
                  <b>{{ price.price }}</b> €
                </span>
              </div>
            </div>
            <div class="allergens prices" v-if="cup.allergens">
              <div class="price item" v-for="(allergen, index) in cup.allergens" :key="index">
                <small class="helper">{{ allergen }}</small>
                <img
                  class="allergen"
                  :src="require(`~/assets/allergens/${allergen}.svg`)"
                  :title="'Alérgeno: ' + allergen"
                  :alt="'Alérgeno: ' + allergen"
                  width="30"
                  height="30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="['modal-overlay', { 'md-show': cup.show }]" @click="cup.show = false"></div>
    </div>
    <!-- modals to 04 items list (beers) -->
    <div
      v-for="(beer, index) in business.beers"
      :key="'C' + index"
      :class="['modal-wrapper', { 'md-show': beer.show }]"
    >
      <div :id="`modal-${beer.id}`" class="md-modal has-dish">
        <div class="md-content dish info">
          <button class="button js-close" type="button" @click="beer.show = false">Cerrar <span>&times;</span></button>
          <div
            class="img cover"
            :style="{
              'background-image':
                'url(' + require(`@/assets/negocios/${business.short}/${business.short}-${beer.img}.jpg`) + ')',
            }"
            v-if="beer.img"
          ></div>
          <div class="details">
            <h4 class="name">{{ beer.name }}</h4>
            <p class="desc" v-if="beer.desc">{{ beer.desc }}</p>
            <div class="prices">
              <div class="price item" v-for="(price, index) in beer.prices" :key="index">
                <small class="price name">{{ price.name }}</small>
                <span class="price quantity">
                  <b>{{ price.price }}</b> €
                </span>
              </div>
            </div>
            <div class="allergens prices" v-if="beer.allergens">
              <div class="price item" v-for="(allergen, index) in beer.allergens" :key="index">
                <small class="helper">{{ allergen }}</small>
                <img
                  class="allergen"
                  :src="require(`~/assets/allergens/${allergen}.svg`)"
                  :title="'Alérgeno: ' + allergen"
                  :alt="'Alérgeno: ' + allergen"
                  width="30"
                  height="30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="['modal-overlay', { 'md-show': beer.show }]" @click="beer.show = false"></div>
    </div>
    <!-- modals to 05 items list (wines) -->
    <div
      v-for="(wine, index) in business.wines"
      :key="'L' + index"
      :class="['modal-wrapper', { 'md-show': wine.show }]"
    >
      <div :id="`modal-${wine.id}`" class="md-modal has-dish">
        <div class="md-content dish info">
          <button class="button js-close" type="button" @click="wine.show = false">Cerrar <span>&times;</span></button>
          <div
            class="img cover is-bottom"
            :style="{
              'background-image':
                'url(' + require(`@/assets/negocios/${business.short}/${business.short}-${wine.img}.jpg`) + ')',
            }"
            v-if="wine.img"
          ></div>
          <div class="details">
            <h4 class="name">{{ wine.name }}</h4>
            <p class="desc" v-if="wine.desc">{{ wine.desc }}</p>
            <div class="prices">
              <div class="price item" v-for="(price, index) in wine.prices" :key="index">
                <small class="price name">{{ price.name }}</small>
                <span class="price quantity">
                  <b>{{ price.price }}</b> €
                </span>
              </div>
            </div>
            <div class="allergens prices" v-if="wine.allergens">
              <div class="price item" v-for="(allergen, index) in wine.allergens" :key="index">
                <small class="helper">{{ allergen }}</small>
                <img
                  class="allergen"
                  :src="require(`~/assets/allergens/${allergen}.svg`)"
                  :title="'Alérgeno: ' + allergen"
                  :alt="'Alérgeno: ' + allergen"
                  width="30"
                  height="30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="['modal-overlay', { 'md-show': wine.show }]" @click="wine.show = false"></div>
    </div>
    <!-- modals to 06 items list (beverage) -->
    <div
      v-for="(drink, index) in business.beverage"
      :key="'H' + index"
      :class="['modal-wrapper', { 'md-show': drink.show }]"
    >
      <div :id="`modal-${drink.id}`" class="md-modal has-dish">
        <div class="md-content dish info">
          <button class="button js-close" type="button" @click="drink.show = false">Cerrar <span>&times;</span></button>
          <div
            class="img cover"
            :style="{
              'background-image':
                'url(' + require(`@/assets/negocios/${business.short}/${business.short}-${drink.img}.jpg`) + ')',
            }"
            v-if="drink.img"
          ></div>
          <div class="details">
            <h4 class="name">{{ drink.name }}</h4>
            <p class="desc" v-if="drink.desc">{{ drink.desc }}</p>
            <div class="prices">
              <div class="price item" v-for="(price, index) in drink.prices" :key="index">
                <small class="price name">{{ price.name }}</small>
                <span class="price quantity">
                  <b>{{ price.price }}</b> €
                </span>
              </div>
            </div>
            <div class="allergens prices" v-if="drink.allergens">
              <div class="price item" v-for="(allergen, index) in drink.allergens" :key="index">
                <small class="helper">{{ allergen }}</small>
                <img
                  class="allergen"
                  :src="require(`~/assets/allergens/${allergen}.svg`)"
                  :title="'Alérgeno: ' + allergen"
                  :alt="'Alérgeno: ' + allergen"
                  width="30"
                  height="30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="['modal-overlay', { 'md-show': drink.show }]" @click="drink.show = false"></div>
    </div>
    <!-- modals to 07 items list (spirits) -->
    <div
      v-for="(spirit, index) in business.spirits"
      :key="'J' + index"
      :class="['modal-wrapper', { 'md-show': spirit.show }]"
    >
      <div :id="`modal-${spirit.id}`" class="md-modal has-dish">
        <div class="md-content dish info">
          <button class="button js-close" type="button" @click="spirit.show = false"
            >Cerrar <span>&times;</span></button
          >
          <div
            class="img cover"
            :style="{
              'background-image':
                'url(' + require(`@/assets/negocios/${business.short}/${business.short}-${spirit.img}.jpg`) + ')',
            }"
            v-if="spirit.img"
          ></div>
          <div class="details">
            <h4 class="name">{{ spirit.name }}</h4>
            <p class="desc" v-if="spirit.desc">{{ spirit.desc }}</p>
            <div class="prices">
              <div class="price item" v-for="(price, index) in spirit.prices" :key="index">
                <small class="price name">{{ price.name }}</small>
                <span class="price quantity">
                  <b>{{ price.price }}</b> €
                </span>
              </div>
            </div>
            <div class="allergens prices" v-if="spirit.allergens">
              <div class="price item" v-for="(allergen, index) in spirit.allergens" :key="index">
                <small class="helper">{{ allergen }}</small>
                <img
                  class="allergen"
                  :src="require(`~/assets/allergens/${allergen}.svg`)"
                  :title="'Alérgeno: ' + allergen"
                  :alt="'Alérgeno: ' + allergen"
                  width="30"
                  height="30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="['modal-overlay', { 'md-show': spirit.show }]" @click="spirit.show = false"></div>
    </div>

    <!-- DISHES :: all items (services or products) list -->
    <div class="dishes">
      <!-- 00 :: business data -->
      <div
        class="business cover"
        :style="{
          'background-image':
            'url(' + require(`@/assets/negocios/${business.short}/${business.short}-${business.cover}.jpg`) + ')',
        }"
        v-if="business.cover"
      ></div>
      <div class="business data">
        <h1 class="data name">{{ business.name }}</h1>
        <ul v-if="business.address || business.phone || business.schedule">
          <li>
            <a
              class="data address"
              :href="business.gmap"
              :title="`Ver dirección de ${business.name}`"
              target="_blank"
              rel="noopener noreferrer"
              v-if="business.address"
              >{{ business.address }}</a
            >
          </li>
          <li :class="business.schedule ? 'has-schedule' : null">
            <a
              class="data phone"
              :href="`tel:${business.phone}`"
              :title="`Llamar al ${business.name}: ${business.phone}`"
              v-if="business.phone"
              >{{ business.phone }}</a
            >
            <button type="button" class="button light" @click="showModal()" v-if="business.schedule">
              Ver horario
            </button>
          </li>
        </ul>
      </div>
      <p class="message alert">
        <span class="emoji"><span>🔔</span></span>
        <span class="copy">Disponemos de productos <b>sin gluten</b>. <br />Consultar con el camarero.</span>
      </p>
      <!-- 01 :: items list :: Daily menu -->
      <h2 class="section name with-desc">Menú del día</h2>
      <p class="section desc"
        >Disponible de <span class="semibold">Martes</span> a <span class="semibold">Viernes</span>.</p
      >
      <div
        class="dish item"
        v-for="(menu, index) in business.menus"
        :key="'D' + index"
        :data-modal="'modal-' + menu.id"
        @click="menu.show = !menu.show"
      >
        <div class="dish info">
          <h3 class="name">{{ menu.name }}</h3>
          <p class="desc" v-if="menu.desc">{{ menu.desc }}</p>
          <div class="prices">
            <div class="price item" v-for="(price, index) in menu.prices" :key="index" v-if="menu.prices">
              <small class="price name">{{ price.name }}</small>
              <span class="price quantity">
                <b>{{ price.price }}</b> €
              </span>
            </div>
          </div>
          <div class="allergens" v-if="menu.allergens">
            <img
              class="allergen"
              v-for="(allergen, index) in menu.allergens"
              :key="index"
              :src="require(`~/assets/allergens/${allergen}.svg`)"
              :title="'Alérgeno: ' + allergen"
              :alt="'Alérgeno: ' + allergen"
              width="20"
              height="20"
            />
          </div>
        </div>
        <figure class="dish img" v-if="menu.img">
          <img
            :src="require(`~/assets/negocios/${business.short}/${business.short}-${menu.img}.jpg`)"
            :title="business.name + ': ' + menu.desc"
            :alt="business.name + ': ' + menu.desc"
            width="90"
            height="90"
          />
        </figure>
      </div>
      <!-- 02 :: items list :: Dishes -->
      <h2 class="section name with-desc">Raciones</h2>
      <p class="section desc">También para llevar. Recoger en el local.</p>
      <div
        class="dish item"
        v-for="(dish, index) in business.dishes"
        :key="'E' + index"
        :data-modal="'modal-' + dish.id"
        @click="dish.show = !dish.show"
      >
        <div class="dish info">
          <h3 class="name">{{ dish.name }}</h3>
          <p class="desc" v-if="dish.desc">{{ dish.desc }}</p>
          <div class="prices">
            <div class="price item" v-for="(price, index) in dish.prices" :key="index">
              <small class="price name">{{ price.name }}</small>
              <span class="price quantity">
                <b>{{ price.price }}</b> €
              </span>
            </div>
          </div>
          <div class="allergens" v-if="dish.allergens">
            <img
              class="allergen"
              v-for="(allergen, index) in dish.allergens"
              :key="index"
              :src="require(`~/assets/allergens/${allergen}.svg`)"
              :title="'Alérgeno: ' + allergen"
              :alt="'Alérgeno: ' + allergen"
              width="20"
              height="20"
            />
          </div>
        </div>
        <figure class="dish img" v-if="dish.img">
          <img
            :src="require(`~/assets/negocios/${business.short}/${business.short}-${dish.img}.jpg`)"
            :title="business.name + ': ' + dish.desc"
            :alt="business.name + ': ' + dish.desc"
            width="90"
            height="90"
          />
        </figure>
      </div>
      <!-- 03 :: items list :: Sandwiches -->
      <h2 class="section name with-desc">Bocadillos y Montados</h2>
      <p class="section desc">Preguntar precios y disponibilidad.</p>
      <!-- <div
        class="dish item"
        v-for="(sandwich, index) in business.sandwiches"
        :key="index"
        :data-modal="'modal-'+sandwich.id"
        @click="sandwich.show = !sandwich.show"
      >
        <div class="dish info">
          <h3 class="name">{{ sandwich.name }}</h3>
          <p class="desc" v-if="sandwich.desc">{{ sandwich.desc }}</p>
          <div class="prices">
            <div
              class="price item"
              v-for="(price, index) in sandwich.prices"
              :key="index"
              v-if="sandwich.prices"
            >
              <small class="price name">{{ price.name }}</small>
              <span class="price quantity">
                <b>{{ price.price }}</b> €
              </span>
            </div>
          </div>
          <div class="allergens" v-if="sandwich.allergens">
            <img
              class="allergen"
              v-for="(allergen, index) in sandwich.allergens"
              :key="index"
              :src="require(`~/assets/allergens/${allergen}.svg`)"
              :title="'Alérgeno: '+allergen"
              :alt="'Alérgeno: '+allergen"
              width="20"
              height="20"
            />
          </div>
        </div>
        <figure class="dish img" v-if="sandwich.img">
          <img
            :src="require(`~/assets/negocios/${business.short}/${business.short}-${sandwich.img}.jpg`)"
            :title="business.name+': '+sandwich.desc"
            :alt="business.name+': '+sandwich.desc"
            width="90"
            height="90"
          />
        </figure>
      </div>-->
      <!-- 04 :: items list :: Breakfast -->
      <h2 class="section name with-desc">Desayunos</h2>
      <p class="section desc">En horario de mañana.</p>
      <div
        class="dish item"
        v-for="(cup, index) in business.breakfast"
        :key="'F' + index"
        :data-modal="'modal-' + cup.id"
        @click="cup.show = !cup.show"
      >
        <div class="dish info">
          <h3 class="name">{{ cup.name }}</h3>
          <p class="desc" v-if="cup.desc">{{ cup.desc }}</p>
          <div class="prices">
            <div class="price item" v-for="(price, index) in cup.prices" :key="index">
              <small class="price name">{{ price.name }}</small>
              <span class="price quantity">
                <b>{{ price.price }}</b> €
              </span>
            </div>
          </div>
          <div class="allergens" v-if="cup.allergens">
            <img
              class="allergen"
              v-for="(allergen, index) in cup.allergens"
              :key="index"
              :src="require(`~/assets/allergens/${allergen}.svg`)"
              :title="'Alérgeno: ' + allergen"
              :alt="'Alérgeno: ' + allergen"
              width="20"
              height="20"
            />
          </div>
        </div>
        <figure class="dish img" v-if="cup.img">
          <img
            :src="require(`~/assets/negocios/${business.short}/${business.short}-${cup.img}.jpg`)"
            :title="business.name + ': ' + cup.desc"
            :alt="business.name + ': ' + cup.desc"
            width="90"
            height="90"
          />
        </figure>
      </div>
      <!-- 05 :: items list :: Beers -->
      <h2 class="section name">Cervezas</h2>
      <!-- <p class="section desc">En horario de mañana.</p> -->
      <div
        class="dish item"
        v-for="(beer, index) in business.beers"
        :key="'G' + index"
        :data-modal="'modal-' + beer.id"
        @click="beer.show = !beer.show"
      >
        <div class="dish info">
          <h3 class="name">{{ beer.name }}</h3>
          <p class="desc" v-if="beer.desc">{{ beer.desc }}</p>
          <div class="prices">
            <div class="price item" v-for="(price, index) in beer.prices" :key="index">
              <small class="price name">{{ price.name }}</small>
              <span class="price quantity">
                <b>{{ price.price }}</b> €
              </span>
            </div>
          </div>
          <div class="allergens" v-if="beer.allergens">
            <img
              class="allergen"
              v-for="(allergen, index) in beer.allergens"
              :key="index"
              :src="require(`~/assets/allergens/${allergen}.svg`)"
              :title="'Alérgeno: ' + allergen"
              :alt="'Alérgeno: ' + allergen"
              width="20"
              height="20"
            />
          </div>
        </div>
        <figure class="dish img" v-if="beer.img">
          <img
            :src="require(`~/assets/negocios/${business.short}/${business.short}-${beer.img}.jpg`)"
            :title="business.name + ': ' + beer.desc"
            :alt="business.name + ': ' + beer.desc"
            width="90"
            height="90"
          />
        </figure>
      </div>
      <!-- 06 :: items list :: Wines -->
      <h2 class="section name with-desc">Vinos</h2>
      <p class="section desc">Amplia variedad de vinos.</p>
      <div
        class="dish item"
        v-for="(wine, index) in business.wines"
        :key="'M' + index"
        :data-modal="'modal-' + wine.id"
        @click="wine.show = !wine.show"
      >
        <div class="dish info">
          <h3 class="name">{{ wine.name }}</h3>
          <p class="desc" v-if="wine.desc">{{ wine.desc }}</p>
          <div class="prices">
            <div class="price item" v-for="(price, index) in wine.prices" :key="index">
              <small class="price name">{{ price.name }}</small>
              <span class="price quantity">
                <b>{{ price.price }}</b> €
              </span>
            </div>
          </div>
          <div class="allergens" v-if="wine.allergens">
            <img
              class="allergen"
              v-for="(allergen, index) in wine.allergens"
              :key="index"
              :src="require(`~/assets/allergens/${allergen}.svg`)"
              :title="'Alérgeno: ' + allergen"
              :alt="'Alérgeno: ' + allergen"
              width="20"
              height="20"
            />
          </div>
        </div>
        <figure class="dish img" v-if="wine.img">
          <img
            :src="require(`~/assets/negocios/${business.short}/${business.short}-${wine.img}.jpg`)"
            :title="business.name + ': ' + wine.desc"
            :alt="business.name + ': ' + wine.desc"
            width="90"
            height="101"
          />
        </figure>
      </div>
      <!-- 07 :: items list :: Beverage -->
      <h2 class="section name">Bebidas</h2>
      <!-- <p class="section desc">En horario de mañana.</p> -->
      <div
        class="dish item"
        v-for="(drink, index) in business.beverage"
        :key="'I' + index"
        :data-modal="'modal-' + drink.id"
        @click="drink.show = !drink.show"
      >
        <div class="dish info">
          <h3 class="name">{{ drink.name }}</h3>
          <p class="desc" v-if="drink.desc">{{ drink.desc }}</p>
          <div class="prices">
            <div class="price item" v-for="(price, index) in drink.prices" :key="index">
              <small class="price name">{{ price.name }}</small>
              <span class="price quantity">
                <b>{{ price.price }}</b> €
              </span>
            </div>
          </div>
          <div class="allergens" v-if="drink.allergens">
            <img
              class="allergen"
              v-for="(allergen, index) in drink.allergens"
              :key="index"
              :src="require(`~/assets/allergens/${allergen}.svg`)"
              :title="'Alérgeno: ' + allergen"
              :alt="'Alérgeno: ' + allergen"
              width="20"
              height="20"
            />
          </div>
        </div>
        <figure class="dish img" v-if="drink.img">
          <img
            :src="require(`~/assets/negocios/${business.short}/${business.short}-${drink.img}.jpg`)"
            :title="business.name + ': ' + drink.desc"
            :alt="business.name + ': ' + drink.desc"
            width="90"
            height="90"
          />
        </figure>
      </div>
      <!-- 08 :: items list :: Spirits -->
      <h2 class="section name">Licores y Combinados</h2>
      <!-- <p class="section desc">En horario de mañana.</p> -->
      <div
        class="dish item"
        v-for="(spirit, index) in business.spirits"
        :key="'K' + index"
        :data-modal="'modal-' + spirit.id"
        @click="spirit.show = !spirit.show"
      >
        <div class="dish info">
          <h3 class="name">{{ spirit.name }}</h3>
          <p class="desc" v-if="spirit.desc">{{ spirit.desc }}</p>
          <div class="prices">
            <div class="price item" v-for="(price, index) in spirit.prices" :key="index">
              <small class="price name">{{ price.name }}</small>
              <span class="price quantity">
                <b>{{ price.price }}</b> €
              </span>
            </div>
          </div>
          <div class="allergens" v-if="spirit.allergens">
            <img
              class="allergen"
              v-for="(allergen, index) in spirit.allergens"
              :key="index"
              :src="require(`~/assets/allergens/${allergen}.svg`)"
              :title="'Alérgeno: ' + allergen"
              :alt="'Alérgeno: ' + allergen"
              width="20"
              height="20"
            />
          </div>
        </div>
        <figure class="dish img" v-if="spirit.img">
          <img
            :src="require(`~/assets/negocios/${business.short}/${business.short}-${spirit.img}.jpg`)"
            :title="business.name + ': ' + spirit.desc"
            :alt="business.name + ': ' + spirit.desc"
            width="90"
            height="90"
          />
        </figure>
      </div>
    </div>

    <div class="message thankfulness">
      <p>¡<b>Gracias</b> por su visita! 😊</p>
    </div>

    <Footer :data="business.name" />
  </main>
</template>

<script>
import Modal from '~/components/Modal.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: { Modal, Footer },
  data() {
    return {
      isModalVisible: false,
      showAside: false,
      business: {
        name: 'Bar Galicia',
        short: 'bar-galicia',
        type: 'Restaurante, bar, cafetería',
        cover: 'cover',
        address: 'Calle Miguel Hernández, 5, 28342 Valdemoro, Madrid',
        place: 'Valdemoro, Madrid',
        gmap: 'https://goo.gl/maps/TGCdSV6Y9rZ1gxQU6',
        phone: '918955364',
        schedule: {
          days: [
            { day: 'Lunes', hour: 'Cerrado' },
            { day: 'Martes', hour: '9:00 - 1:00' },
            { day: 'Miercoles', hour: '9:00 - 1:00' },
            { day: 'Jueves', hour: '9:00 - 1:00' },
            { day: 'Viernes', hour: '9:00 - 1:00' },
            { day: 'Sábado', hour: '9:00 - 1:00' },
            { day: 'Domingo', hour: '9:00 - 1:00' },
          ],
        },
        menus: [
          {
            id: '99',
            show: false,
            name: 'Menú diario',
            img: null,
            desc: 'Preguntar los platos ofrecidos cada día. Incluye pan, bebida, postre o café.',
            prices: [{ name: 'Precio', price: '10' }],
            allergens: null,
          },
        ],
        dishes: [
          {
            id: '01',
            show: false,
            name: 'Patatas bravas o mixtas',
            img: 'racion-braviolis',
            desc: 'Ración de patatas bravas picantes.',
            prices: [
              { name: 'Ración', price: '9' },
              { name: '1/2 ración', price: '6' },
            ],
            allergens: ['sulfitos', 'huevos'],
          },
          {
            id: '02',
            show: false,
            name: 'Carne de pincho',
            img: 'racion-carnepincho',
            desc: 'Ración de carne de pincho con patatas fritas y pimientos de Padrón.',
            prices: [
              { name: 'Ración', price: '15' },
              { name: '1/2 ración', price: '10' },
            ],
            allergens: ['sulfitos'],
          },
          {
            id: '03',
            show: false,
            name: 'Croquetas de jamón',
            img: 'racion-croquetas',
            desc: 'Ración de croquetas caseras de jamón serrano.',
            prices: [
              { name: 'Ración', price: '10' },
              { name: '1/2 ración', price: '7,50' },
            ],
            allergens: ['huevos', 'lacteos', 'sulfitos'],
          },
          {
            id: '04',
            show: false,
            name: 'Ensalada mixta',
            img: 'racion-ensalada-mixta',
            desc: 'Ensalada de mezclun de lechugas, tomate, espáragos, atún, maiz...',
            prices: [
              { name: 'Entera', price: '9' },
              { name: '1/2 ensalada', price: '7' },
            ],
            allergens: ['huevos'],
          },
          {
            id: '05',
            show: false,
            name: 'Jamón ibérico',
            img: null,
            desc: null,
            prices: [
              { name: 'Ración', price: '18' },
              { name: '1/2 ración', price: '13' },
            ],
            allergens: null,
          },
          {
            id: '06',
            show: false,
            name: 'Queso curado',
            img: null,
            desc: null,
            prices: [
              { name: 'Ración', price: '12,50' },
              { name: '1/2 ración', price: '8' },
            ],
            allergens: ['lacteos'],
          },
          {
            id: '07',
            show: false,
            name: 'Lacón a la gallega',
            img: null,
            desc: 'Lacón de cerdo cocido con patatas y su toque de pimentón y aceite de oliva virgen.',
            prices: [
              { name: 'Ración', price: '12' },
              { name: '1/2 ración', price: '8' },
            ],
            allergens: null,
          },
          {
            id: '08',
            show: false,
            name: 'Tabla de salchipapas',
            img: null,
            desc: 'Patatas fritas con salchichas acompañado de salsa brava, kepchup, mostaza, alioli...',
            prices: [
              { name: 'Ración', price: '9' },
              { name: '1/2 ración', price: '7' },
            ],
            allergens: ['mostaza', 'huevos', 'sulfitos'],
          },
          {
            id: '09',
            show: false,
            name: 'Tortilla de patatas',
            img: 'racion-tortilla',
            desc: 'Básico de la comida española. Con o sin cebolla. Al punto, jugosilla.',
            prices: [
              { name: 'Entera', price: '9' },
              { name: 'Media', price: '5' },
            ],
            allergens: ['huevos', 'sulfitos'],
          },
          {
            id: '10',
            show: false,
            name: 'Alitas de pollo',
            img: null,
            desc: 'Alitas de pollo con patatas fritas y pimientos al punto de sal.',
            prices: [
              { name: 'Ración', price: '12' },
              { name: '1/2 ración', price: '8' },
            ],
            allergens: ['sulfitos'],
          },
          {
            id: '11',
            show: false,
            name: 'Nuggets de pollo',
            img: null,
            desc: 'Pequeñas piezas de pechuga de pollo rebozadas y fritas.',
            prices: [
              { name: 'Ración', price: '11' },
              { name: '1/2 ración', price: '7' },
            ],
            allergens: ['sulfitos'],
          },
          {
            id: '12',
            show: false,
            name: 'Oreja a la plancha',
            img: null,
            desc: 'La radicional oreja de cerdo a la plancha al punto que desse con un punto picante.',
            prices: [
              { name: 'Ración', price: '13,50' },
              { name: '1/2 ración', price: '8,80' },
            ],
            allergens: ['sulfitos'],
          },
          {
            id: '13',
            show: false,
            name: 'Huevos rotos con jamón',
            img: null,
            desc: 'Revuelto de patatas fritas, huevos fritos y jamón curado. Un clásico.',
            prices: [
              { name: 'Ración', price: '13' },
              { name: '1/2 ración', price: '8,50' },
            ],
            allergens: ['huevos', 'sulfitos'],
          },
          {
            id: '14',
            show: false,
            name: 'Pimientos de Padrón',
            img: null,
            desc: 'Como dirían en Galicia: Os pementos de Padrón, uns pican e outros non.',
            prices: [
              { name: 'Ración', price: '10' },
              { name: '1/2 ración', price: '6' },
            ],
            allergens: ['sulfitos'],
          },
          {
            id: '15',
            show: false,
            name: 'Pulpo a la gallega',
            img: 'racion-pulpo',
            desc: 'Pulpo cocido con cachelos y su toque de sal, aceite de oliva y pimentón.',
            prices: [{ name: 'Ración', price: '15' }],
            allergens: ['moluscos', 'pescado'],
          },
          {
            id: '16',
            show: false,
            name: 'Chopitos',
            img: null,
            desc: null,
            prices: [
              { name: 'Ración', price: '13' },
              { name: '1/2 ración', price: '8,80' },
            ],
            allergens: ['moluscos', 'pescado', 'sulfitos'],
          },
          {
            id: '17',
            show: false,
            name: 'Calamares a la romana',
            img: null,
            desc: 'Calamares rebozados fritos con su toque de limón.',
            prices: [
              { name: 'Ración', price: '14' },
              { name: '1/2 ración', price: '9' },
            ],
            allergens: ['moluscos', 'pescado', 'sulfitos'],
          },
          {
            id: '18',
            show: false,
            name: 'Boquerones fritos',
            img: 'racion-boquerones-fritos',
            desc: 'Al estilo andaluz, con su toque de vinagre, pimentón y limón.',
            prices: [
              { name: 'Ración', price: '12' },
              { name: '1/2 ración', price: '8' },
            ],
            allergens: ['pescado', 'sulfitos'],
          },
          {
            id: '19',
            show: false,
            name: 'Patas de calamar',
            img: 'racion-rabas',
            desc: 'Patas de calamar rebozadas fritas con su toque de limón.',
            prices: [
              { name: 'Ración', price: '14' },
              { name: '1/2 ración', price: '9' },
            ],
            allergens: ['moluscos', 'pescado', 'sulfitos'],
          },
          {
            id: '20',
            show: false,
            name: 'Fritura de pescado',
            img: 'racion-fritura',
            desc: 'Fritura variada de pescado rebozado: calamares, gambas, rabas, cazón...',
            prices: [
              { name: 'Ración', price: '15' },
              { name: '1/2 ración', price: '10' },
            ],
            allergens: ['moluscos', 'crustaceos', 'pescado', 'sulfitos'],
          },
          {
            id: '21',
            show: false,
            name: 'Sepia a la plancha',
            img: 'racion-sepia',
            desc: 'Sepia con salsa alioli y guarnición de ensalada.',
            prices: [{ name: 'Ración', price: '14' }],
            allergens: ['moluscos', 'pescado', 'huevos', 'sulfitos'],
          },
          {
            id: '22',
            show: false,
            name: 'Gambón a la plancha',
            img: null,
            desc: null,
            prices: [{ name: 'Ración', price: '17' }],
            allergens: ['crustaceos', 'pescado', 'sulfitos'],
          },
          {
            id: '23',
            show: false,
            name: 'Boquerones en vinagre',
            img: null,
            desc: 'Boquerones en vinagre con su toque de ajo y perejil.',
            prices: [
              { name: 'Ración', price: '10' },
              { name: '1/2 ración', price: '6,50' },
            ],
            allergens: ['pescado'],
          },
          {
            id: '24',
            show: false,
            name: 'Anchoas',
            img: null,
            desc: 'Anchoas en aceite de oliva virgen.',
            prices: [
              { name: 'Ración', price: '12' },
              { name: '1/2 ración', price: '7,50' },
            ],
            allergens: ['pescado'],
          },
          {
            id: '25',
            show: false,
            name: 'Matrimonio',
            img: null,
            desc: 'Clásico combinado de anchoas en aceite y boquerones en vinagre.',
            prices: [
              { name: 'Ración', price: '11' },
              { name: '1/2 ración', price: '7' },
            ],
            allergens: ['pescado'],
          },
        ],
        sandwiches: [
          {
            id: '30',
            show: false,
            name: 'Bocadillos y montados',
            img: null,
            desc: 'Preguntar precios y disponibilidad.',
            prices: null,
            allergens: null,
          },
        ],
        breakfast: [
          {
            id: '41',
            show: false,
            name: 'Café y tostada',
            img: null,
            desc: 'Café al gusto (cortado, sólo, con leche...) con tostada de mantequilla y mermelada o tomate.',
            prices: [
              { name: 'Entera', price: '2,50' },
              { name: 'Media', price: '2,20' },
            ],
            allergens: null,
          },
          {
            id: '42',
            show: false,
            name: 'Café y tostada con jamón',
            img: null,
            desc: 'Café al gusto (cortado, sólo, con leche...) con tostada de tomate y jamón.',
            prices: [{ name: 'Entera', price: '3,80' }],
            allergens: null,
          },
        ],
        beers: [
          {
            id: '50',
            show: false,
            name: 'Cerveza de grifo',
            img: 'cerveza-grifo',
            desc: 'Disponemos de grifos de: Estrella de Galicia, Mahou y Heineken.',
            prices: [
              { name: 'Caña', price: '1,80' },
              { name: 'Copa', price: '2,50' },
              { name: 'Maceta', price: '3' },
              { name: 'Jarra', price: '3,40' },
            ],
            allergens: ['gluten'],
          },
          {
            id: '51',
            show: false,
            name: 'Cerveza en botella',
            img: 'cerveza-tercio',
            desc: 'Disponemos de: Estrella de Galicia, Mahou y Heineken.',
            prices: [
              { name: 'Botellín', price: '1,60' },
              { name: 'Tercio', price: '2,50' },
            ],
            allergens: ['gluten'],
          },
          {
            id: '52',
            show: false,
            name: 'Cerveza sin gluten',
            img: 'cerveza-tercio-sin-gluten',
            desc: 'Tercio de Mahou sin gluten.',
            prices: [{ name: 'Tercio', price: '2,80' }],
            allergens: null,
          },
          {
            id: '53',
            show: false,
            name: 'Cerveza 1906',
            img: 'cerveza-1906',
            desc: 'Tercio de cerveza especial reserva 1906 de Estrella de Galicia.',
            prices: [{ name: 'Tercio', price: '2,90' }],
            allergens: ['gluten'],
          },
          {
            id: '54',
            show: false,
            name: 'Cerveza tostada 0,0',
            img: 'cerveza-tostada-00',
            desc: 'Mahou 0,0 Tostada tiene una combinación inimitable de maltas tostadas.',
            prices: [{ name: 'Tercio', price: '2,50' }],
            allergens: ['gluten'],
          },
        ],
        beverage: [
          {
            id: '60',
            show: false,
            name: 'Café o infusión',
            img: 'cafe-con-leche',
            desc: 'Café al gusto (cortado, sólo, con leche...) o infusión.',
            prices: [{ name: 'Precio', price: '1,30' }],
            allergens: null,
          },
          {
            id: '61',
            show: false,
            name: 'Carajillo',
            img: null,
            desc: null,
            prices: [{ name: 'Precio', price: '2,50' }],
            allergens: null,
          },
          {
            id: '62',
            show: false,
            name: 'Colacao',
            img: null,
            desc: null,
            prices: [{ name: 'Precio', price: '1,40' }],
            allergens: null,
          },
          {
            id: '63',
            show: false,
            name: 'Botella de agua',
            img: 'botella-agua',
            desc: 'El agua de Cabreiroá destaca por sus propiedades minero-medicinales.',
            prices: [
              { name: '1/2 litro', price: '1,60' },
              { name: '1 litro', price: '2,80' },
            ],
            allergens: null,
          },
          {
            id: '64',
            show: false,
            name: 'Refrescos',
            img: 'refrescos',
            desc: 'Coca-Cola, Coca-Cola Zero, Fanta de naranja y limón...',
            prices: [{ name: 'Precio', price: '2,40' }],
            allergens: null,
          },
          {
            id: '65',
            show: false,
            name: 'Zumos',
            img: 'zumos',
            desc: 'De piña, melocotón...',
            prices: [{ name: 'Precio', price: '2,40' }],
            allergens: null,
          },
        ],
        spirits: [
          {
            id: '70',
            show: false,
            name: 'Tinto de verano',
            img: 'tinto-de-verano',
            desc: 'Vino tinto con gaseosa o limón bien fresquito.',
            prices: [
              { name: 'Maceta', price: '2,50' },
              { name: 'Jarra', price: '3,20' },
            ],
            allergens: null,
          },
          {
            id: '71',
            show: false,
            name: 'Chupito',
            img: null,
            desc: null,
            prices: [{ name: 'Precio', price: '1,40' }],
            allergens: null,
          },
          {
            id: '72',
            show: false,
            name: 'Copa de licor',
            img: null,
            desc: null,
            prices: [{ name: 'Precio', price: '2,40' }],
            allergens: null,
          },
          {
            id: '73',
            show: false,
            name: 'Copa de Baileys',
            img: null,
            desc: null,
            prices: [{ name: 'Precio', price: '3,80' }],
            allergens: null,
          },
          {
            id: '74',
            show: false,
            name: 'Combinados',
            img: 'combinados',
            desc: 'Combinados nacionales o de importación. Preguntar al camarero por nuestra selección de licores.',
            prices: [
              { name: 'Nacional', price: '5' },
              { name: 'Importación', price: '5,50' },
              { name: 'Nordes', price: '7,30' },
              { name: 'Legendario', price: '5,80' },
            ],
            allergens: null,
          },
        ],
        wines: [
          {
            id: '80',
            show: false,
            name: 'Condado de Haza',
            img: 'vino-condado-haza',
            desc: 'Crianza 2017 es un vino limpio y brillante, ideal para maridar con asados de carne.',
            prices: [
              { name: 'Copa', price: '3' },
              { name: 'Botella', price: '18' },
            ],
            allergens: null,
          },
          {
            id: '81',
            show: false,
            name: 'La Planta',
            img: 'vino-la-planta',
            desc: 'Ribera del Duero 2018. Ideal para embutidos y quesos así como para guisos.',
            prices: [
              { name: 'Copa', price: '2,60' },
              { name: 'Botella', price: '15' },
            ],
            allergens: null,
          },
          {
            id: '82',
            show: false,
            name: 'Albariño Altos de Torona',
            img: 'vino-altos-de-torona',
            desc: 'Vino blanco de uva Albariño, recogida en las laderas del río Miño.',
            prices: [
              { name: 'Copa', price: '2,50' },
              { name: 'Botella', price: '14' },
            ],
            allergens: null,
          },
          {
            id: '83',
            show: false,
            name: 'Manzanilla Solear',
            img: 'vino-manzanilla-solear',
            desc: 'Manzanilla fina y vieja, de carácter alegre que funcionará de maravilla con ibéricos.',
            prices: [
              { name: 'Copa', price: '2,50' },
              { name: 'Botella', price: '15' },
            ],
            allergens: null,
          },
          {
            id: '84',
            show: false,
            name: 'Portocelo Roble',
            img: 'vino-portocelo-rivera',
            desc: 'Vino tinto tempranillo con denominación de origen Ribera del Duero.',
            prices: [
              { name: 'Copa', price: '2,20' },
              { name: 'Botella', price: '12' },
            ],
            allergens: null,
          },
          {
            id: '85',
            show: false,
            name: 'Lan Crianza',
            img: 'vino-lan-crianza',
            desc: 'Vino crianza de la Rioja Alta y Rioja Alavesa perfecto para acompañar tapas y entremeses.',
            prices: [
              { name: 'Copa', price: '2,90' },
              { name: 'Botella', price: '17' },
            ],
            allergens: null,
          },
          {
            id: '86',
            show: false,
            name: 'Rueda Heredad de Peñalosa',
            img: 'vino-rueda-penalosa',
            desc: 'Vino blanco 100% Verdejo con denominación de origen Rueda.',
            prices: [
              { name: 'Copa', price: '2,20' },
              { name: 'Botella', price: '12' },
            ],
            allergens: null,
          },
          {
            id: '87',
            show: false,
            name: 'Alma de Valdeguerra',
            img: 'vino-alma-valdeguerra',
            desc: 'Vino rosado semidulce con denominación de origen Madrid.',
            prices: [
              { name: 'Copa', price: '2,20' },
              { name: 'Botella', price: '12' },
            ],
            allergens: null,
          },
          {
            id: '88',
            show: false,
            name: 'Viñaredo Godello',
            img: 'vino-vinaredo-godello',
            desc: 'Vino blanco fresco y afrutado procedente de viñedos de Valdeorras.',
            prices: [
              { name: 'Copa', price: '2,20' },
              { name: 'Botella', price: '14' },
            ],
            allergens: null,
          },
        ],
      },
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'LocalBusiness',
        'additionalType': 'Bar Galicia de Valdemoro en jalofernández',
        '@id': 'https://haztunegociodigital.com/horeca/bar-galicia',
        'url': 'https://haztunegociodigital.com/horeca/bar-galicia',
        // sameAs: [
        //   "https://www.instagram.com/jalofernandez/?ref=badge",
        //   "https://twitter.com/jalofernandez",
        //   "https://www.linkedin.com/in/javierlorenzofernandez/",
        //   "https://github.com/jalofernandez",
        //   "https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
        //   "https://www.facebook.com/jalofernandez?ref=tn_tnmn",
        // ],
        'logo': '',
        'name': 'Bar Galicia Valdemoro',
        'description': 'Bar Galicia de Valdemoro especializado en raciones y cocina gallega',
        'telephone': '+34 696 682 791',
        'email': 'jalofernandez@gmail.com',
        'currenciesAccepted': 'EUR',
        'paymentAccepted': 'Efectivo, tarjeta de crédito, Cash, Credit Card',
        'priceRange': 'Desde 2€',
        'image': '',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+34 91 895 53 64',
          'contactType': 'Llamar para reservar o recoger pedidos',
        },
      },
    }
  },
  head() {
    const businessName = this.business.name
    const businessShort = this.business.short
    const businessPlace = this.business.place
    const businessType = this.business.type

    const title = `${businessName} en #HazTuNegocioDigital`
    const description = `${businessName} en ${businessPlace} por @jalofernandez`
    const type = `${businessType} en ${businessPlace}`

    const canonical = `https://haztunegociodigital.com/horeca/${businessShort}`

    const meta = [
      { hid: 'description', name: 'description', content: description },
      { hid: 'Classification', name: 'Classification', content: businessType },
      { hid: 'subject', name: 'subject', content: type },

      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:url', property: 'og:url', content: canonical },
      // { hid: 'og:site_name', name: 'og:site_name', content: 'Jalofernández design webmaster frontend diseño gráfico', },
      // { hid: 'og:image', name: 'og:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
      // { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
      // { hid: 'og:image:width', name: 'og:image:width', content: '960' },
      // { hid: 'og:image:height', name: 'og:image:height', content: '540' },
      // { hid: 'og:image:alt', name: 'og:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },

      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:description', name: 'twitter:description', content: description },

      // { hid: 'twitter:image', name: 'twitter:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
      // { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },
      // { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      // { hid: 'twitter:site', name: 'twitter:site', content: '@jalofernandez' },
      // { hid: 'twitter:creator', name: 'twitter:creator', content: '@jalofernandez' },
    ]

    const link = [{ rel: 'canonical', hid: 'canonical', href: canonical }]

    // if (this.restaurant.web) {
    //   link.push({ rel: 'dns-prefetch', href: this.restaurant.web })
    // }

    return {
      title,
      meta,
      link,
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify(this.structuredData),
          type: 'application/ld+json',
        },
      ],
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>

<style lang="sass">
main.horeca
  &.bar-galicia
    .footer .name
      font-family: cursive
      font-size: 1.2rem
      color: #940202
</style>
