import Item from './item'
import '../styles/items.css'
import '../styles/globals.css'
import { MdAccountBox } from 'react-icons/md';
import { MdAssignment } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { MdHelp } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';

function Items() {
  return (
    <section className="items-section">
      <h1> Menu Principal</h1>
      <div className="v-container v-locale--is-ltr container grid">
        <Item
          className="item mdi-account-box-outline"
          title="PERFIL PERSONAL"
          iconClass={<MdAccountBox />}
        />
        <Item
          className="item"
          title="REGISTRO DE PROGRAMAS"
          iconClass={<MdAssignment />}
        />
        <Item
          className="item"
          title="DOCENTES"
          iconClass={<MdSearch />}
        />
        <Item
          className="item"
          title="POSTULANTES"
          iconClass={<MdHelp />}
        />
        <Item
          className="item"
          title="PROGRAMAS"
          iconClass={<MdAccountBox />}
        />
        <Item
          className="item"
          title="CERTIFICACIONES DOCENTES"
          iconClass={<MdPerson />}
        />
      </div>
    </section>
  )
}

export default Items
