import Vue from 'vue'
import erpInput from './forms/input'
import erpSelect from './forms/select'
import erpTableSearch from './table-search'
import erpTree from './tree'
import erpSwitch from './forms/switch'
import mainPage from './main-page'
import erpImgPicker from './forms/erp-img-picker'
import erpDatePicker from './forms/date-picker'
import erpCheckbox from './forms/checkbox'
import toolbar from './toolbar'
import erpRadio from './forms/radios'
import erpTextarea from './forms/textarea'

Vue.component(erpTextarea.name, erpTextarea)
Vue.component(toolbar.name, toolbar)
Vue.component(erpRadio.name, erpRadio)
Vue.component(erpDatePicker.name, erpDatePicker)
Vue.component(erpCheckbox.name, erpCheckbox)
Vue.component(erpTableSearch.name, erpTableSearch)
Vue.component(erpInput.name, erpInput)
Vue.component(erpSwitch.name, erpSwitch)
Vue.component(mainPage.name, mainPage)
Vue.component(erpSelect.name, erpSelect)
Vue.component(erpImgPicker.name, erpImgPicker)
Vue.component(erpTree.name, erpTree)
