import { beforeEach, expect, test } from 'vitest';

import React from 'react';
import App from '../App';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import { myStore } from '../store/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import fs from 'fs';
import path from 'path';

const addMovieComp = fs
  .readFileSync(
    path.resolve(__dirname, '../components/AddMovieForm.jsx'),
    'utf8'
  )
  .replaceAll(/(?:\r\n|\r|\n| )/g, '');

beforeEach(() => {
  render(
    <Provider store={myStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
});

test('Favorileri Gizle butonu tıklanınca favori panelini gizliyor.', async () => {
  const user = userEvent.setup();
  await user.click(screen.getByText('Favorileri gizle'));
  expect(screen.queryByText('Favori Filmler')).toBe(null);
});

test('Favorileri Gizle butonu tıklandıkça, metni Favorileri göster ve Favorileri gizle arasında değişiyor.', async () => {
  const user = userEvent.setup();
  const favoriButton = screen.queryByText('Favorileri gizle');
  await user.click(favoriButton);
  expect(screen.queryByText('Favorileri göster')).not.toBe(null);
});

test('Tüm filmler ekranda gösteriliyor', async () => {
  const user = userEvent.setup();
  expect(screen.queryByText('The Godfather')).not.toBe(null);
  expect(screen.queryByText('Star Wars')).not.toBe(null);
  expect(
    screen.queryByText('The Lord of the Rings: The Fellowship of the Ring')
  ).not.toBe(null);
  expect(screen.queryByText('Terminator 2: Judgement Day')).not.toBe(null);
  expect(screen.queryByText('Terminator 3: Etüt Day')).not.toBe(null);
  expect(screen.queryByText('Dumb and Dumber')).not.toBe(null);
  expect(screen.queryByText('Tombstone')).not.toBe(null);
});

test('Detay butonu film detaylarını gösteriyor.', async () => {
  const user = userEvent.setup();

  const detayButonlari = screen.getAllByText('Detay');
  await user.click(detayButonlari[0]);

  expect(screen.queryByText('The Godfather Detayları')).not.toBe(null);
});

test('Film detayları sayfasında Favorilere Ekle butonu filmi favori listesine ekliyor', async () => {
  const user = userEvent.setup();

  if (!screen.queryByText('Favori Filmler')) {
    await user.click(screen.queryByText('Favorileri göster'));
  }
  await user.click(screen.getByText('Tüm filmler'));
  const detayButonlari = screen.getAllByText('Detay');
  await user.click(detayButonlari[0]);
  expect(screen.queryByText('The Godfather Detayları')).not.toBe(null);
  await user.click(screen.getByText('Favorilere ekle'));
  expect(await screen.findAllByTestId('favorite-movie')).toHaveLength(1);
});

test('Film detayları sayfasında Favorilere Ekle butonu filmi favori listesine 2. kez eklemiyor', async () => {
  const user = userEvent.setup();
  await user.click(screen.getByText('Favorilere ekle'));
  expect(await screen.findAllByTestId('favorite-movie')).toHaveLength(1);
});

test('sil butonu filmi siliyor ve tüm filmler sayfası açılıyor.', async () => {
  const user = userEvent.setup();
  await user.click(screen.getByText('Tüm filmler'));
  const detayButonlari = screen.getAllByText('Detay');
  await user.click(detayButonlari[1]);
  expect(screen.queryByText('Star Wars Detayları')).not.toBe(null);
  await user.click(screen.getByText('Sil'));
  expect(screen.queryByText('Star Wars')).toBe(null);
  expect(screen.queryByText('Terminator 2: Judgement Day')).not.toBe(null);
});

test('Yeni film ekleniyor ve tüm filmler sayfası açılıyor.', async () => {
  const user = userEvent.setup();
  await user.click(screen.getByText('Yeni film ekle'));
  await user.type(screen.getByLabelText('Title'), 'Deneme filmi');
  await user.type(screen.getByLabelText('Director'), 'Deneme director');
  await user.type(screen.getByLabelText('Genre'), 'Deneme genre');
  await user.type(screen.getByLabelText('Metascore'), '100');
  await user.type(
    screen.getByLabelText('Description'),
    'Deneme filminin açıklaması'
  );
  await user.click(screen.getByText('Ekle'));
  expect(screen.queryByText('Terminator 3: Etüt Day')).not.toBe(null);
  expect(screen.queryByText('Deneme filmi')).not.toBe(null);
});

test('AddMovieForm componentinde preventDefault kullanılmış', async () => {
  expect(addMovieComp).toContain('.preventDefault()');
});
