import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';
import CarCard from './components/CarCard/CarCard';
import Banner from './components/Banner/Banner';
import Pagination from './components/Pagination/Pagination';

import styles from './App.module.scss';

const allCars = [
  {
    name: "Toyota",
    model: "Corolla 2021",
    pricePerDay: 159.9,
    imageUrl: "https://carro.blog.br/wp-content/uploads/2020/09/corolla-2021.jpg",
    fuel: "Gasolina",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Honda",
    model: "Civic 2020",
    pricePerDay: 145,
    imageUrl: "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2019/10/23/lx-1.jpg",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Chevrolet",
    model: "Onix 2022",
    pricePerDay: 129.9,
    imageUrl: "https://production.autoforce.com/uploads/version/profile_image/6114/comprar-premier-1-0-turbo-pacote-r7l_26090cd691.png",
    fuel: "Gasolina",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Volkswagen",
    model: "Gol 2023",
    pricePerDay: 119.9,
    imageUrl: "https://s3.sa-east-1.amazonaws.com/revista.mobiauto/Volkswagen/Gol+e+Voyage+2023/Gol-2023-3x4-dianteira.jpg",
    fuel: "Flex",
    available: false,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Fiat",
    model: "Uno 2021",
    pricePerDay: 109.9,
    imageUrl: "https://mundodoautomovelparapcd.com.br/wp-content/uploads/2021/04/Uno-Way-2021-01.jpg",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Renault",
    model: "Kwid 2022",
    pricePerDay: 99.9,
    imageUrl: "https://image1.mobiauto.com.br/images/api/images/v1.0/53048220/transform/fl_progressive,f_webp,q_70,w_592",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Hyundai",
    model: "HB20 2021",
    pricePerDay: 139.9,
    imageUrl: "https://static.stg.kbb.com.br/pkw/p/hyundai/hb20/2021/5ha_45.jpg",
    fuel: "Flex",
    available: false,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Nissan",
    model: "Kicks 2020",
    pricePerDay: 149.9,
    imageUrl: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzk1MzExL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzQzNTM5NDUyOTQ4LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjU0MCwiaGVpZ2h0IjozMTB9fX0=",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Ford",
    model: "Ka 2021",
    pricePerDay: 109.9,
    imageUrl: "https://cdn.wheel-size.com/automobile/body/ford-ka-2019-2021-1629285546.6090434.jpg",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Peugeot",
    model: "208 2022",
    pricePerDay: 119.9,
    imageUrl: "https://image1.mobiauto.com.br/images/api/images/v1.0/48002235/transform/fl_progressive,f_webp,q_85,w_959",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Toyota",
    model: "Corolla 2021",
    pricePerDay: 159.9,
    imageUrl: "https://carro.blog.br/wp-content/uploads/2020/09/corolla-2021.jpg",
    fuel: "Gasolina",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Honda",
    model: "Civic 2020",
    pricePerDay: 145,
    imageUrl: "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2019/10/23/lx-1.jpg",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Chevrolet",
    model: "Onix 2022",
    pricePerDay: 129.9,
    imageUrl: "https://production.autoforce.com/uploads/version/profile_image/6114/comprar-premier-1-0-turbo-pacote-r7l_26090cd691.png",
    fuel: "Gasolina",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Volkswagen",
    model: "Gol 2023",
    pricePerDay: 119.9,
    imageUrl: "https://s3.sa-east-1.amazonaws.com/revista.mobiauto/Volkswagen/Gol+e+Voyage+2023/Gol-2023-3x4-dianteira.jpg",
    fuel: "Flex",
    available: false,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Fiat",
    model: "Uno 2021",
    pricePerDay: 109.9,
    imageUrl: "https://mundodoautomovelparapcd.com.br/wp-content/uploads/2021/04/Uno-Way-2021-01.jpg",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Renault",
    model: "Kwid 2022",
    pricePerDay: 99.9,
    imageUrl: "https://image1.mobiauto.com.br/images/api/images/v1.0/53048220/transform/fl_progressive,f_webp,q_70,w_592",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Hyundai",
    model: "HB20 2021",
    pricePerDay: 139.9,
    imageUrl: "https://static.stg.kbb.com.br/pkw/p/hyundai/hb20/2021/5ha_45.jpg",
    fuel: "Flex",
    available: false,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Nissan",
    model: "Kicks 2020",
    pricePerDay: 149.9,
    imageUrl: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzk1MzExL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzQzNTM5NDUyOTQ4LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjU0MCwiaGVpZ2h0IjozMTB9fX0=",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Ford",
    model: "Ka 2021",
    pricePerDay: 109.9,
    imageUrl: "https://cdn.wheel-size.com/automobile/body/ford-ka-2019-2021-1629285546.6090434.jpg",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Peugeot",
    model: "208 2022",
    pricePerDay: 119.9,
    imageUrl: "https://image1.mobiauto.com.br/images/api/images/v1.0/48002235/transform/fl_progressive,f_webp,q_85,w_959",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Toyota",
    model: "Corolla 2021",
    pricePerDay: 159.9,
    imageUrl: "https://carro.blog.br/wp-content/uploads/2020/09/corolla-2021.jpg",
    fuel: "Gasolina",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Honda",
    model: "Civic 2020",
    pricePerDay: 145,
    imageUrl: "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2019/10/23/lx-1.jpg",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Chevrolet",
    model: "Onix 2022",
    pricePerDay: 129.9,
    imageUrl: "https://production.autoforce.com/uploads/version/profile_image/6114/comprar-premier-1-0-turbo-pacote-r7l_26090cd691.png",
    fuel: "Gasolina",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Volkswagen",
    model: "Gol 2023",
    pricePerDay: 119.9,
    imageUrl: "https://s3.sa-east-1.amazonaws.com/revista.mobiauto/Volkswagen/Gol+e+Voyage+2023/Gol-2023-3x4-dianteira.jpg",
    fuel: "Flex",
    available: false,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Fiat",
    model: "Uno 2021",
    pricePerDay: 109.9,
    imageUrl: "https://mundodoautomovelparapcd.com.br/wp-content/uploads/2021/04/Uno-Way-2021-01.jpg",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Renault",
    model: "Kwid 2022",
    pricePerDay: 99.9,
    imageUrl: "https://image1.mobiauto.com.br/images/api/images/v1.0/53048220/transform/fl_progressive,f_webp,q_70,w_592",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Hyundai",
    model: "HB20 2021",
    pricePerDay: 139.9,
    imageUrl: "https://static.stg.kbb.com.br/pkw/p/hyundai/hb20/2021/5ha_45.jpg",
    fuel: "Flex",
    available: false,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Nissan",
    model: "Kicks 2020",
    pricePerDay: 149.9,
    imageUrl: "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzk1MzExL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzQzNTM5NDUyOTQ4LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjU0MCwiaGVpZ2h0IjozMTB9fX0=",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Ford",
    model: "Ka 2021",
    pricePerDay: 109.9,
    imageUrl: "https://cdn.wheel-size.com/automobile/body/ford-ka-2019-2021-1629285546.6090434.jpg",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
  {
    name: "Peugeot",
    model: "208 2022",
    pricePerDay: 119.9,
    imageUrl: "https://image1.mobiauto.com.br/images/api/images/v1.0/48002235/transform/fl_progressive,f_webp,q_85,w_959",
    fuel: "Flex",
    available: true,
    gears: 0,
    doors: 0,
    luggageCapacity: 0,
  },
];

const itemsPerPage = 10;

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allCars.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCars = allCars.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.appContainer}>
      <Navbar />

      <div className={styles.contentWrapper}>
        <Aside />

        <main className={styles.mainContent}>
          <Banner />
          <h2>Confira nossos veículos</h2>

          <div className={styles.cardGrid}>
            {currentCars.map((car, index) => (
              <CarCard key={index} {...car} gears={0} doors={0} luggageCapacity={0} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
