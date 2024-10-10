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
          title="PERFIL PERSONAL"
          iconClass={<MdAccountBox />}
        />
        <Item
          title="REGISTRO DE PROGRAMAS"
          iconClass={<MdAssignment />}
        />
        <Item
          title="DOCENTES"
          iconClass={<MdSearch />}
        />
        <Item
          title="POSTULANTES"
          iconClass={<MdHelp />}
        />
        <Item
          title="PROGRAMAS"
          iconClass={<MdAccountBox />}
        />
        <Item
          title="CERTIFICACIONES DOCENTES"
          iconClass={<MdPerson />}
        />
      </div>
    </section>
  )
}

export default Items
