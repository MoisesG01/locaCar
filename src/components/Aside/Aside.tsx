import { FaCarAlt, FaGasPump, FaStar, FaListUl, FaSearch } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './Aside.module.scss';

const Aside = () => {
  // Dados fictícios para o gráfico de preços
  const data = [
    { name: 'Jan', price: 120 },
    { name: 'Feb', price: 200 },
    { name: 'Mar', price: 150 },
    { name: 'Apr', price: 180 },
    { name: 'May', price: 170 },
  ];

  return (
    <aside className={styles.aside}>
      <h3 className={styles.title}>Categorias</h3>

      <ul className={styles.menu}>
        <li><FaCarAlt /> Todos os carros</li>
        <li><FaGasPump /> Econômicos</li>
        <li><FaStar /> Luxo</li>
        <li><FaListUl /> SUVs</li>
      </ul>

      <h4 className={styles.subTitle}>Filtros</h4>

      <div className={styles.filters}>
        <div className={styles.filter}>
          <label htmlFor="price">Preço:</label>
          <input type="range" id="price" min="0" max="1000" />
          <span>R$ 0 - R$ 1000</span>
        </div>

        <div className={styles.filter}>
          <label htmlFor="fuel">Combustível:</label>
          <select id="fuel">
            <option value="all">Todos</option>
            <option value="gas">Gasolina</option>
            <option value="flex">Flex</option>
            <option value="electric">Elétrico</option>
          </select>
        </div>

        <div className={styles.filter}>
          <label htmlFor="location">Localização:</label>
          <select id="location">
            <option value="all">Todos os lugares</option>
            <option value="rio">Rio de Janeiro</option>
            <option value="sp">São Paulo</option>
            <option value="bh">Belo Horizonte</option>
          </select>
        </div>

        <div className={styles.filter}>
          <label htmlFor="rating">Avaliação:</label>
          <select id="rating">
            <option value="all">Todas as avaliações</option>
            <option value="4">4 estrelas</option>
            <option value="4_5">4,5 estrelas</option>
            <option value="5">5 estrelas</option>
          </select>
        </div>

        <div className={styles.search}>
          <input type="text" placeholder="Buscar carro..." />
          <FaSearch />
        </div>
      </div>

      <h4 className={styles.subTitle}>Preço por Dia (Últimos 5 meses)</h4>

      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </aside>
  );
};

export default Aside;
