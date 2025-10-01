import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl text-center my-10">Welcome to Our Ice Cream Shop!</h1>
      <section className="my-10">
        <h2 className="text-3xl my-5">Our Flavors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-200 p-4">Classic Vanilla</div>
          <div className="bg-pink-200 p-4">Strawberry Sensation</div>
          <div className="bg-yellow-200 p-4">Mango Tango</div>
          <div className="bg-green-200 p-4">Mint Chocolate</div>
        </div>
      </section>
      <section className="my-10">
        <h2 className="text-3xl my-5">About Us</h2>
        <p className="text-lg">We're a family-owned ice cream shop with a passion for homemade, delicious ice creams. We love serving our community and bringing smiles with every scoop. Come visit us!</p>
      </section>
      <section className="my-10">
        <h2 className="text-3xl my-5">Contact</h2>
        <p className="text-lg">Feel free to reach out for party bookings or special requests. Email: contact@icecreamshop.com</p>
      </section>
    </div>
  );
}
