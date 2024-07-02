Gün Projesi: IMDB Film VeritTabanı

Daha önce yapılmış bir film uygulaması artık güncellenirken sorunlar çıkarmaya başladı. Yönetilmesi çok zor oldu. Projenin kapsamı da gittikçe karmaşıklaşıyor. Bu yüzden bu projeye redux eklenecek.

Senden de aşağıda listesi çıkarılmış işleri tamamlaman bekleniyor.

1. Reduxı kur

[ ] store klasörü içinde store.js dosyasında createStore metodu ile myStore adıyla store oluşturup export edin.
[ ] main.jsx içinde provider ile oluşturduğunuz store'u uygulamanıza bağlayın.

2. Film reducerını bağla

[ ] ./store/reducers/movieReducer.js içinde, statein başlangıç değerini initialState olarak ayarlayın.
[ ] MovieList componenti, tüm filmleri ekrana yazdırır. MovieList.jsx componentinde, boş array olarak tanımlanmış movies değişkeninin gerçek değerini useSelector ile store'dan alın.
[ ] Movie componentinin çalışması için film listemize erişmesi gerekir. Movie.jsx componeninde de boş array olarak tanımlanmış movies değişkeninin gerçek değerini useSelector ile store'dan alın.
[ ] MovieHeader, başlık metnini görüntülemek için appTitle'ı kullanır.. Bu componentde de appTitle'ı store'dan alın.

3. Sil ve Film Ekle actionlarını bağla

[ ] Movie componenti içinde filmleri silebiliriz. useDipatch'ı tanımlayın ve deleteMovie action'ını sil butonuna bağlayın.
[ ] dispatch sonrası kullanıcıyı push('/movies') komutunu kullanarak yönlendirin.
[ ] movieReducer.js'ye bir ADD_MOVIE casei ekleyin.
[ ] Bu yeni casein, payload aracılığıyla iletilen yeni filmi movies'e eklemesini sağlayın.
[ ] movieActions.js'de addMovie için bir action creator oluşturun.
[ ] Bir filmin eklenmesini tetikleyen butonu bulun ve addMovie action'ını bağlayın.
[ ] Yönlendirmeyi tetiklemek için action dispatch olduktan sonra push('/movies/') ile yönlendirin.

4. Favoriler reducerını sıfırdan oluştur

[ ] Favoriler için caseleri oluşturmak adına store/reducers dosyası içinde yeni bir reducer dosyası oluşturun. Adı favoritesReducer.js olsun. InitialState olarak aşağıdaki state değerlerini ekleyin:

favorites: film nesnesini içeren bir dizi
displayFavorites: appda favorilerin görüntülendiği bilgisini tutan bir boolean
[ ] Başlangıç oarak, switch deyimine yalnızca bir default case ekleyin.

[ ] Yeni reducerınızı ./store/reducers/index.js dosyasına import edin.

[ ] reducers/index.js'de hem filmleri hem de favori filmleri redux'a bağlamak için CombineReducers metodunu kullanın.

[ ] Film işlevleri artık çalışmıyor. Film reducera bağlı bileşenin tekrar çalışmasını sağlamak için gerekli değişiklikleri yapın. (İpucu: combine ile birleştirdiğiniz reducersların state'lerine artık farklı erişiyoruz. Eskiden store.movies iken artık store.movieReducer.movies gibi oldu)

[ ] Favoriler stateini FavoriteMovieList.jsx component'ine bağlayın ve test edin.

[ ] DisplayFavorites stateini Movie.jsx ve MovieHeader.jsx bileşenine bağlayın.

5. Favori actionlarını ekle

Aşağıdaki actionlar için reducer caseleri, action creator, action constant ve event handler kodlarını yazın:

[ ] toggleFavorites : displayFavorites state değerini true ve false olarak değiştirir. displayFavorites true olduğunda, Favorilere ekle düğmesi Movie sayfasında görünmemeli.

[ ] addFavorites: Favoriler listesine yeni bir film nesnesi ekler.

[ ] removeFavorite: Gönderilen bir id ile bir film Nesnesini favoriler listesinden kaldırır.

6. Favori actionlarını daha iyi hale getir

[ ] Şu anda, aynı filmi birden çok kez favorilerinize ekleyebilirsin. Yalnızca listede olmayan filmleri favorilere eklenebilir hale getirmek için AddFavorite action'ını güncelleyin.
[ ] Eğer film ana filmler listesinden silinirse, favorilere ekliyse ordan da silinmelidir, kodunuzu buna göre güncelleyin.

Çalışma dosyaları: src/store/actions/movieActions.js, src/store/actions/favoritesActions.js, src/store/reducers/favoritesReducer.js, src/store/reducers/index.js, src/store/reducers/movieReducer.js, src/store/store.js, src/components/AddMovieForm.jsx, src/components/FavoriteMovieList.jsx, src/components/Movie.jsx, src/components/MovieHeader.jsx, src/components/MovieList.jsx, src/App.jsx
