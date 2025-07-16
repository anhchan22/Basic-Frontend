# Buổi 1: Cơ bản về Web - HTML
## I, Cơ bản về Web
### **Cách thức hoạt động của 1 trang web:** 
1: Người dùng gửi yêu cầu (**request**)
 - Người dùng mở trình duyệt (Chrome, Edge,...) và gõ địa chỉ website (ví dụ: https://www.example.com).
  
2: Hệ thống phân giải tên miền (**DNS**)
 - Trình duyệt cần biết **địa chỉ IP** của example.com để kết nối đến máy chủ
 - **DNS sever** (giống danh bạ điện thoại) sẽ cho biết example.com là IP nào
 - ví dụ DNS trả về `93.184.216.34`

3: Kết nối đến Server
 - Trình duyệt dùng địa chỉ IP trên để **kết nối đến máy chủ (server)** chứa trang web
 - Gửi yêu cầu: "Cho tôi nội dung của /trangchu.html"

4: Server xử lý và phản hồi (**response**)
 - Máy chủ xử lý yêu cầu -> trả về nội dung HTML, CSS, JS, ... 

5: Trình duyệt hiển thị trang web
 - Trình duyệt nhận nội dung và hiển thị trang web lên màn hình

### Các thuật ngữ, lĩnh vực

| Thuật ngữ        | Ý nghĩa                                                                 |
|------------------|-------------------------------------------------------------------------|
| Domain (Tên miền)| Địa chỉ web dễ nhớ (vd: google.com). Mỗi domain tương ứng 1 IP.        |
| IP Address       | Địa chỉ của một thiết bị trong mạng. Ví dụ: 192.168.1.1                |
| Hosting          | Nơi lưu trữ dữ liệu website (HTML, ảnh, video, database...)            |
| Web Server       | Máy chủ xử lý và gửi dữ liệu website cho người dùng (vd: Apache, Nginx)|
| Client           | Thiết bị người dùng (máy tính, điện thoại) gửi yêu cầu truy cập web    |
| HTTP / HTTPS     | Giao thức truyền tải dữ liệu web (S là bảo mật - SSL)                  |
| URL              | Địa chỉ đầy đủ của trang web (vd: https://example.com/page)            |
| Frontend         | Giao diện người dùng (HTML, CSS, JS)                                   |
| Backend          | Phần xử lý dữ liệu phía máy chủ (PHP, NodeJS, Python, Java,...)        |
| Fullstack        | Làm cả frontend + backend                                               |
| Database         | Cơ sở dữ liệu lưu thông tin người dùng, bài viết,... (vd: MySQL, MongoDB)|
| CMS              | Hệ thống quản lý nội dung (như WordPress)                              |


## II, HTML
### 1. Khái niệm
 -**HTML** là chữ viết tắt của **HyperText Markup Language**, dịch ra tiếng Việt có nghĩa là **ngôn ngữ đánh dấu siêu văn bản**. Nó dùng để định dạng bố cục, các thuộc tính liên quan đến cách hiển thị của một đoạn text và được hiển thị trên một chương trình đặc biệc, ta gọi là trình duyệt browser.

### 2. HTML và XHTML
 - XHTML – Sự kết hợp giữa HTML và XML
XHTML (Extensible HyperText Markup Language) ra đời vào năm 2000, nhằm kết hợp cú pháp chặt chẽ của XML với tính linh hoạt của HTML4.

Đặc điểm của XHTML:
Bắt buộc phải viết đúng chuẩn, không được có lỗi cú pháp.
Mọi thẻ phải được đóng đúng cách (<br /> thay vì <br>).
Yêu cầu viết thẻ bằng chữ thường (<html> thay vì <HTML>).
Mặc dù giúp cải thiện tính nhất quán, nhưng cú pháp nghiêm ngặt của XHTML làm cho việc phát triển web trở nên khó khăn hơn.

### 3. Cấu trúc HTML
 - **Bố cục cơ bản của một tài liệu HTML:**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>

        <h1>My First Heading</h1>
        <p>My first paragraph.</p>

    </body>
</html>
```
 - **Giải thích từng phần:**
    - `<!DOCTYPE html>`  
      → Là phần **khai báo kiểu dữ liệu HTML** để trình duyệt (Browser) hiểu cách xử lý tài liệu.

    - `<html> ... </html>`  
      → Là **cặp thẻ nằm ngoài cùng**, có nhiệm vụ bao toàn bộ nội dung của trang web.  
      → **Bắt buộc phải có** trong tài liệu HTML.

    - `<head> ... </head>`  
      → Phần **khai báo thông tin** cho trang web như tiêu đề, charset, viewport, CSS, JS,...

    - `<title> ... </title>`  
      → Tiêu đề hiển thị trên **tab trình duyệt**.

    - `<body> ... </body>`  
      → Là phần **quan trọng nhất**, chứa các thẻ hiển thị nội dung trên trang web.  
      → Ví dụ: `<h1>`, `<p>`, `<img>`, `<a>`, `<div>`, ...
 - Như vậy trong 1 website chúng ta chia làm 2 phần chính:
   - Phần 1: Là những khai báo thông tin cho trang web, đặt trong thẻ `head`
   - Phần 2: Là phần hiển thị định dạng nội dung của trang web, đặt trong thẻ `body` 

### 4. Khái niệm: Element, Attribute, Comment
 - **Element html** chính là danh sách những thẻ html mà trình duyệt hỗ trợ, và nó cũng nằm trong danh sách các thẻ html mà WWW đã quy định.
    - Ví dụ: `<p class="intro">Đây là một đoạn văn.</p>` 
 - **Attribute** là thuộc tính của thẻ, cung cấp thông tin bổ sung về các phần tử HTML. Chúng là các cặp key-value (khóa-giá trị) đi kèm với các thẻ HTML.
    - Ví dụ, thẻ `<a>` sử dụng thuộc tính `href` để xác định liên kết đến đâu, thẻ `<img>` sử dụng thuộc tính `src` để xác định nguồn của hình ảnh...
 - **Comment** trong HTML hay bất kì ngôn ngữ lập trình nào đều rất quan trọng, giúp code dễ hiểu, dễ bảo trì và cập nhật
   - Cú pháp Comment trong HTML: `<!--- Nội dung comment -->`

### 5. Thẻ meta
 - Thẻ meta trong HTML là một thẻ dùng để cung cấp thông tin về tài liệu HTML cho trình duyệt và công cụ tìm kiếm. Thẻ này không hiển thị nội dung trên trang, nhưng nó chứa thông tin quan trọng như:
   **1. Mô tả (description):** Tóm tắt nội dung trang, giúp cải thiện khả năng hiển thị trên công cụ tìm kiếm.
      `<meta name="description" content="Tóm tắt nội dung trang web">`
   **2. Từ khóa (keywords):** Liệt kê các từ khóa liên quan đến nội dung trang.
      `<meta name="keywords" content="từ khóa1, từ khóa2, từ khóa3">`
   **3. Tác giả (author):** Thông tin về tác giả của tài liệu.
      `<meta name="author" content="Tên tác giả">`
   **4. Chỉ định bộ mã ký tự (charset):** Xác định bộ ký tự được sử dụng trong tài liệu.
      `<meta charset="UTF-8">`
   **5. Viewport:** Điều chỉnh cách hiển thị trên các thiết bị di động.
      `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

 - Thẻ meta thường được đặt trong phần <head> của tài liệu HTML để trình duyệt và công cụ tìm kiếm có thể truy cập thông tin này khi tải trang.
 - Giữa HTML và XHTML có sự khác biệt cụ thể như: HTML thẻ <meta> không có thẻ đóng còn XHTML thẻ <meta> bắt buộc phải đóng thẻ.

### 6. Thẻ Head
 - Thẻ `head` là một phần tử HTML được sử dụng để chứa các thông tin về trang web mà không được hiển thị trực tiếp trên trình duyệt của người dùng.
 - Các thông tin trong thẻ head như **tiêu đề trang, mô tả trang, từ khóa, thông tin tác giả, các tập tin CSS và JavaScript được liên kết với trang**, và nhiều thông tin khác.
 - Các thông tin trong thẻ head rất quan trọng cho việc tối ưu hóa công cụ tìm kiếm (SEO) vì chúng giúp các công cụ tìm kiếm hiểu được nội dung và ý nghĩa của trang web.

#### Các thẻ thường dùng trong `<head>`

| Thẻ                             | Mục đích sử dụng                                                            |
|----------------------------------|-----------------------------------------------------------------------------|
| `<title>`                       | Tiêu đề trang – hiển thị ở tab trình duyệt                                 |
| `<meta charset="...">`          | Khai báo bộ mã ký tự (thường dùng UTF-8)                                   |
| `<meta name="viewport">`        | Thiết lập hiển thị cho thiết bị di động (responsive)                       |
| `<meta name="description">`     | Mô tả nội dung trang – phục vụ SEO                                         |
| `<meta name="keywords">`        | Liệt kê từ khóa liên quan đến nội dung (SEO, hiện ít được ưu tiên)         |
| `<meta name="author">`          | Tên tác giả của trang                                                      |
| `<meta http-equiv="refresh">`   | Tự động reload hoặc chuyển hướng sau X giây                                |
| `<meta http-equiv="X-UA-Compatible">` | Chế độ tương thích với trình duyệt cũ như IE                          |
| `<link rel="stylesheet">`       | Gắn file CSS vào trang                                                     |
| `<link rel="icon">`             | Gắn favicon – icon nhỏ ở tab trình duyệt                                   |
| `<link rel="preload">`          | Tải trước tài nguyên (ảnh, font, script)                                   |
| `<link rel="alternate">`        | Liên kết phiên bản thay thế (vd: bản ngôn ngữ khác hoặc RSS)               |
| `<style>`                       | Viết CSS trực tiếp trong HTML                                              |
| `<script>`                      | Nhúng hoặc liên kết file JavaScript                                        |
| `<base href="...">`             | Thiết lập đường dẫn cơ sở cho tất cả URL trong tài liệu                    |
| `<meta property="og:...">`      | Thẻ Open Graph – tối ưu khi chia sẻ lên mạng xã hội như Facebook, Zalo     |
| `<meta name="robots">`          | Hướng dẫn bot tìm kiếm: có nên index và theo liên kết không (`index, follow`) |

### 7. Thẻ Body
 - Thẻ body là 1 phần tử HTML được sử dụng để chứa nội dung chính của trang web, bao gồm: **văn bản, hình ảnh, video, các phần tử định dạng, vv...**
 - Các phần tử HTML bên trong thẻ body được hiển thị trực tiếp trên trình duyệt của người dùng, và chúng tạo thành nội dung chính của trang web.
     - Thẻ `<h>` được sử dụng để định nghĩa tiêu đề của trang web
     - Thẻ `<p>` để chứa các đoạn văn bản
     - Thẻ `<b>` in đậm (dùng `strong` thay thế thể hiện nội dung quan trọng) 
     - Thẻ `<i>` in nghiêng (dùng `em` để nhấn mạnh nội dung)
     - Thẻ `<u>` gạch chân
     - thẻ `<a>` gắn kèm đường dẫn`
     - thẻ `<img>` hình ảnh
     - thẻ `<ul>` danh sách không có thứ tự
     - thẻ `<ol>` danh sách có thứ tự

## III, Các thẻ HTML cơ bản

### 1. Thẻ định dạng cấu trúc (Layout)

| Thẻ        | Mô tả                                   | Ví dụ |
|------------|------------------------------------------|-------|
| `<header>` | Phần đầu trang                           | `<header><h1>Logo</h1></header>` |
| `<footer>` | Phần chân trang                          | `<footer>© 2025 My Site</footer>` |
| `<nav>`    | Điều hướng chính                         | `<nav><a href="/">Home</a></nav>` |
| `<section>`| Vùng nội dung riêng biệt                 | `<section><h2>Giới thiệu</h2></section>` |
| `<article>`| Bài viết độc lập                         | `<article><h2>Bài viết 1</h2></article>` |
| `<aside>`  | Phần phụ như sidebar                     | `<aside>Quảng cáo</aside>` |
| `<div>`    | Khối chứa dùng để nhóm nội dung          | `<div class="box">Nội dung</div>` |

---

### 2. Thẻ định dạng nội dung văn bản

| Thẻ         | Mô tả                                 | Ví dụ |
|-------------|----------------------------------------|-------|
| `<p>`       | Đoạn văn bản                           | `<p>Xin chào!</p>` |
| `<h1>`–`<h6>` | Các tiêu đề từ lớn đến nhỏ           | `<h1>Tiêu đề chính</h1>` |
| `<strong>`  | Nhấn mạnh nội dung (đậm, có nghĩa)     | `<strong>Quan trọng!</strong>` |
| `<em>`      | Nhấn mạnh bằng chữ nghiêng            | `<em>Lưu ý</em>` |
| `<u>`      | Gạch chân                             | `<u>Gạch chân</u>`                  |
| `<del>`    | Gạch xóa                              | `<del>Giá cũ</del>`                 |
| `<mark>`   | Đánh dấu (highlight)                  | `<mark>Quan trọng</mark>`           |
| `<sub>`    | Chỉ số dưới                           | `H<sub>2</sub>O`                    |
| `<sup>`    | Chỉ số trên                           | `X<sup>2</sup>`                     |
| `<small>`  | Văn bản nhỏ                           | `<small>Chữ nhỏ</small>`            |
| `<big>`    | Văn bản lớn                           | `<big>Chữ lớn</big>`                |
| `<blockquote>` | Trích dẫn dài                       | `<blockquote>Đây là câu nói...</blockquote>` |
| `<pre>`     | Hiển thị định dạng sẵn                 | `<pre>    dòng giữ nguyên</pre>` |
| `<code>`    | Hiển thị đoạn mã                       | `<code>console.log("Hello")</code>` |
| `<br>`      | Xuống dòng                            | `<p>Dòng 1 <br> Dòng 2</p>` |
| `<hr>`      | Gạch ngang chia nội dung              | `<p>Nội dung đầu</p> <hr> <p>Nội dung sau</p>` |
---

### 3. Thẻ bảng

| Thẻ        | Mô tả                                  | Ví dụ |
|------------|-----------------------------------------|-------|
| `<table>`  | Bảng                                    | `<table>...</table>` |
| `<tr>`     | Hàng trong bảng                         | `<tr><td>A</td><td>B</td></tr>` |
| `<td>`     | Ô dữ liệu                               | `<td>95</td>` |
| `<th>`     | Ô tiêu đề                               | `<th>Tên</th>` |
| `<thead>`  | Phần đầu bảng                           | `<thead><tr><th>STT</th></tr></thead>` |
| `<tbody>`  | Thân bảng                               | `<tbody><tr><td>1</td></tr></tbody>` |
| `<tfoot>`  | Chân bảng                               | `<tfoot><tr><td>Tổng</td></tr></tfoot>` |
| `<caption>`| Tiêu đề bảng                            | `<caption>Bảng điểm</caption>` |

#### Attribute của Thẻ bảng

| Thẻ | Attribute | Mô tả | Ví dụ |
|------|------------|----------------------------|----------------------------|
| `<table>` | `border` | Hiển thị đường viền bảng | `<table border="1">` |
|           | `width`  | Độ rộng của bảng (px hoặc %) | `<table width="100%">` |
|           | `cellspacing` | Khoảng cách giữa các ô | `<table cellspacing="5">` |
|           | `cellpadding` | Khoảng cách nội dung trong ô | `<table cellpadding="10">` |
|           | `align`  | Căn bảng trái, phải, giữa (left, right, center) | `<table align="center">` |
| `<tr>`    | `align`  | Căn hàng (trái, giữa, phải) | `<tr align="center">` |
| `<td>` / `<th>` | `colspan` | Gộp nhiều cột | `<td colspan="2">Gộp 2 cột</td>` |
|             | `rowspan` | Gộp nhiều hàng | `<td rowspan="3">Gộp 3 hàng</td>` |
|             | `align`   | Căn trái / phải / giữa trong ô | `<td align="right">123</td>` |
|             | `valign`  | Căn dọc trên / giữa / dưới (top, middle, bottom) | `<td valign="top">Nội dung</td>` |
|             | `width`, `height` | Kích thước của ô | `<td width="100">` |

---

#### Ví dụ:

```html
<table border="1" width="60%" cellpadding="10" cellspacing="0" align="center">
  <caption>Bảng điểm học sinh</caption>
  <thead>
    <tr>
      <th rowspan="2">Họ tên</th>
      <th colspan="2">Điểm</th>
    </tr>
    <tr>
      <th>Toán</th>
      <th>Văn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">Lan</td>
      <td align="center">9</td>
      <td align="center">8</td>
    </tr>
  </tbody>
</table>
```
---

### 4. Thẻ danh sách

| Thẻ       | Mô tả                                    | Ví dụ |
|-----------|-------------------------------------------|-------|
| `<ul>`    | Danh sách không thứ tự                   | `<ul><li>HTML</li></ul>` |
| `<ol>`    | Danh sách có thứ tự                      | `<ol><li>Bước 1</li></ol>` |
| `<li>`    | Mỗi mục trong danh sách                  | `<li>Mục</li>` |
| `<dl>`    | Danh sách mô tả                          | `<dl><dt>HTML</dt><dd>Là gì</dd></dl>` |
| `<dt>`    | Thuật ngữ trong danh sách mô tả         | `<dt>CSS</dt>` |
| `<dd>`    | Mô tả cho `<dt>`                         | `<dd>Ngôn ngữ tạo kiểu</dd>` |

---

### 5. Thẻ multimedia (đa phương tiện)

| Thẻ        | Mô tả                                  | Ví dụ |
|------------|-----------------------------------------|-------|
| `<img>`    | Hình ảnh                               | `<img src="logo.png" alt="Logo">` |
| `<audio>`  | Nhúng âm thanh                         | `<audio controls><source src="a.mp3"></audio>` |
| `<video>`  | Nhúng video                            | `<video controls><source src="v.mp4"></video>` |
| `<source>` | Tệp nguồn (dùng trong audio/video)     | `<source src="x.mp4" type="video/mp4">` |
| `<iframe>` | Nhúng nội dung từ web khác             | `<iframe src="https://youtube.com"></iframe>` |

#### Thuộc tính cho hình ảnh (`<img>`)

| Thuộc tính | Mô tả | Ví dụ |
|------------|-------|-------|
| `src`      | Đường dẫn tới ảnh | `<img src="logo.png">` |
| `alt`      | Văn bản thay thế khi ảnh lỗi | `<img alt="Logo">` |
| `width` / `height` | Chiều rộng và cao | `<img width="200">` |

#### Thuộc tính cho video, audio (`<audio>`, `<video>`)

| Thuộc tính  | Mô tả | Ví dụ |
|-------------|-------|-------|
| `controls`  | Hiển thị thanh điều khiển | `<video controls>` |
| `autoplay`  | Tự động phát khi tải xong | `<audio autoplay>` |
| `loop`      | Lặp lại video/audio | `<video loop>` |
| `muted`     | Tắt tiếng mặc định | `<video muted>` |

---

### 6. Thẻ liên kết

| Thẻ        | Mô tả                                   | Ví dụ |
|------------|------------------------------------------|-------|
| `<a>`      | Liên kết đến URL hoặc tệp               | `<a href="https://google.com">Google</a>` |
| `<link>`   | Liên kết đến tài nguyên như CSS, icon   | `<link rel="stylesheet" href="style.css">` |
| `<nav>`    | Khu điều hướng chứa nhiều liên kết      | `<nav><a href="/">Home</a></nav>` |

####  Thuộc tính cho liên kết (`<a>`)

| Thuộc tính | Mô tả | Ví dụ |
|------------|-------|-------|
| `href`     | Đường dẫn liên kết | `<a href="https://google.com">Google</a>` |
| `target`   | Xác định nơi mở liên kết | `_blank`, `_self`,... → `<a target="_blank">` |
| `download` | Cho phép tải file về | `<a href="file.pdf" download>Download</a>` |

#### Ví dụ
```html
  <!-- liên kết đến 1 trang web khác -->
  <a href="https://www.google.com" target="_blank">Truy cập Google</a>
  <br>

  <!-- Liên kết nội bộ đến phần trong trang -->
  <a href="#about">Xem phần Giới thiệu</a>
  <!-- Ở vị trí khác trong trang -->
  <h2 id="about">Giới thiệu</h2>

  <!-- Liên kết tải tệp về máy -->
  <a href="tai-lieu.pdf" download>Tải tài liệu PDF</a>
  <!-- Trình duyệt sẽ tự tải file thay vì mở -->
  <br>
  
  <!-- Gửi email qua liên kết -->
  <a href="mailto:trananh22052005@gmail.com">Gửi email cho chúng tôi</a>
```

---

### 8. Thẻ biểu mẫu (form)

| Thẻ          | Mô tả                                  | Ví dụ |
|--------------|-----------------------------------------|-------|
| `<form>`     | Biểu mẫu nhập dữ liệu                 | `<form action="/submit"></form>` |
| `<input>`    | Trường nhập dữ liệu                       | `<input type="text" name="ten">` |
| `<button>`   | Nút bấm                                | `<button>Gửi</button>` |
| `<label>`    | Nhãn cho trường nhập dữ liệu                  | `<label for="name">Tên:</label>` |
| `<textarea>` | Ô nhập văn bản dài                    | `<textarea></textarea>` |
| `<select>`   | Danh sách thả xuống                   | `<select><option>A</option></select>` |
| `<option>`   | Mục trong `<select>`                  | `<option>Chọn 1</option>` |

#### Thuộc tính cho form & input

| Thuộc tính     | Mô tả | Ví dụ |
|----------------|-------|-------|
| `type`         | Loại trường nhập (text, email, password, checkbox,...) | `<input type="email">` |
| `name`         | Tên của trường (để gửi dữ liệu) | `<input name="email">` |
| `placeholder`  | Gợi ý nhập liệu | `<input placeholder="Nhập tên">` |
| `value`        | Giá trị mặc định | `<input value="Học sinh">` |
| `required`     | Bắt buộc nhập | `<input required>` |
| `checked`      | Đánh dấu sẵn checkbox/radio | `<input type="checkbox" checked>` |
| `readonly`     | Chỉ đọc | `<input readonly value="Không sửa được">` |
| `disabled`     | Không thể thao tác | `<input disabled>` |
| `maxlength`    | Giới hạn ký tự | `<input maxlength="20">` |

#### Ví dụ:
```html
<form action="/submit" method="POST">
    <h2>Đăng ký tài khoản</h2>

    <label for="fullname">Họ và tên:</label><br>
    <input type="text" id="fullname" name="fullname" placeholder="Nhập họ tên" required><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" placeholder="Nhập email" required><br><br>

    <label for="password">Mật khẩu:</label><br>
    <input type="password" id="password" name="password" required><br><br>

    <label for="gender">Giới tính:</label><br>
    <select id="gender" name="gender">
      <option value="male">Nam</option>
      <option value="female">Nữ</option>
      <option value="other">Khác</option>
    </select><br><br>

    <label><input type="checkbox" name="agree" required> Tôi đồng ý với điều khoản</label><br><br>

    <button type="submit">Đăng ký</button>
  </form>
```
---

### 9. Một số thẻ khác

| Thẻ            | Mô tả                               | Ví dụ |
|----------------|--------------------------------------|-------|
| `<meta>`       | Khai báo siêu dữ liệu               | `<meta charset="UTF-8">` |
| `<base>`       | Đặt đường dẫn gốc cho liên kết      | `<base href="https://example.com/">` |
| `<progress>`   | Thanh tiến độ                       | `<progress value="70" max="100"></progress>` |
| `<meter>`      | Thang đo định lượng                 | `<meter value="0.6">60%</meter>` |
### 10. Thẻ script, HTML JS
#### 1. Thẻ `<script>` là gì?

Thẻ `<script>` dùng để **nhúng hoặc liên kết mã JavaScript** vào trang HTML. JavaScript giúp:
- Thêm tính tương tác cho trang web
- Xử lý sự kiện (click, nhập dữ liệu, v.v.)
- Cập nhật nội dung động

#### 2. Cách sử dụng

 - **Nhúng trực tiếp JavaScript**

```html
    <h1>Xin chào</h1>
    <script>
      alert("Chào bạn! Đây là hộp thoại JS");
    </script>
```
 - **Gắn file JavaScript bên ngoài**
```html
  <head>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
```
**script.js**
```javascript
console.log("Trang đã được load!");
```
#### 3. Ví dụ tương tác: Bấm nút hiện thông báo
```html
<!DOCTYPE html>
<html>
  <body>
    <button onclick="sayHello()">Bấm vào đây</button>

    <script>
      function sayHello() {
        alert("Xin chào! Bạn vừa bấm nút");
      }
    </script>
  </body>
</html>
```

#### 4. Thuộc tính của thẻ `<script>`

| Thuộc tính | Mô tả | Ví dụ |
|------------|-------|-------|
| `src`      | Đường dẫn tới file JavaScript bên ngoài | `<script src="main.js"></script>` |
| `type`     | Loại MIME (thường là `text/javascript`, nhưng có thể bỏ) | `<script type="text/javascript">` |
| `defer`    | Trì hoãn thực thi cho đến khi toàn bộ HTML được phân tích xong | `<script src="main.js" defer>` |
| `async`    | Tải script bất đồng bộ, không đợi tải HTML hoàn tất | `<script src="analytics.js" async>` |


#### 5. Vị trí đặt `<script>`

| Vị trí         | Ưu điểm | Nhược điểm | Gợi ý sử dụng |
|----------------|---------|------------|----------------|
| Trong `<head>` | Script được tải đầu tiên | Có thể làm chậm việc hiển thị nếu không dùng `defer` | Dùng nếu muốn kiểm soát chặt luồng thực thi |
| Cuối `<body>`  | Toàn bộ HTML đã sẵn sàng khi script chạy | Script chạy sau toàn bộ nội dung HTML | **Khuyên dùng** cho hiệu suất |
| Dùng `defer`   | Kết hợp cả hai ưu điểm trên | Chỉ hoạt động với file ngoài (`src`) | Tốt khi script không phụ thuộc thứ tự |

## III, Các thuộc tính: class, id, required, type,...

| Thuộc tính     | Mô tả chức năng                                                                 | Ví dụ sử dụng |
|----------------|----------------------------------------------------------------------------------|----------------|
| `id`           | Xác định duy nhất một phần tử. Dùng để CSS hoặc JavaScript truy cập dễ dàng.   | `<div id="header">...</div>` |
| `class`        | Gán tên lớp (CSS class) để định dạng nhiều phần tử có cùng kiểu.                | `<p class="intro">...</p>` |
| `type`         | Xác định loại trường nhập liệu (`text`, `email`, `password`, v.v...)            | `<input type="email">` |
| `name`         | Tên của phần tử dùng để gửi dữ liệu trong form.                                 | `<input name="username">` |
| `value`        | Giá trị mặc định hoặc đã nhập của trường nhập.                                  | `<input value="admin">` |
| `placeholder`  | Hiển thị gợi ý mờ trong trường nhập.                                            | `<input placeholder="Nhập tên...">` |
| `required`     | Bắt buộc nhập trước khi gửi form.                                               | `<input required>` |
| `readonly`     | Trường chỉ hiển thị, không thể chỉnh sửa.                                       | `<input readonly value="Không sửa được">` |                                | `<input disabled>` |
| `checked`      | Dùng cho checkbox hoặc radio để đánh dấu sẵn.                                   | `<input type="checkbox" checked>` |
| `maxlength`    | Giới hạn số ký tự được nhập.                                                    | `<input maxlength="20">` |
| `min`, `max`   | Giới hạn giá trị nhỏ nhất và lớn nhất (thường dùng với `number`, `date`,...)    | `<input type="number" min="1" max="10">` |
| `step`         | Bước nhảy giữa các giá trị (dùng cho number, range).                            | `<input type="number" step="5">` |


#### Ví dụ
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Form với class, id, CSS và JS</title>
  <style>
    .highlight {
      background-color: #f0f8ff;
      border: 2px solid #4CAF50;
      padding: 10px;
    }

    #message {
      color: red;
      font-style: italic;
    }

    .success {
      color: green;
    }
  </style>
</head>
<body>

  <form id="myForm" class="highlight">
    <label for="name">Họ tên:</label><br>
    <input type="text" id="name" name="name" placeholder="Nhập họ tên" required><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" placeholder="abc@example.com" required><br><br>

    <label>
      <input type="checkbox" id="agree" required> Tôi đồng ý
    </label><br><br>

    <button type="submit">Gửi</button>
  </form>

  <p id="message"></p>

  <script>
    // JS xử lý form khi submit
    const form = document.getElementById("myForm");
    const msg = document.getElementById("message");

    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Ngăn gửi form
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      if (name && email) {
        msg.textContent = "Đăng ký thành công!";
        msg.className = "success";
      } else {
        msg.textContent = "Vui lòng điền đầy đủ thông tin.";
        msg.className = "";
      }
    });
  </script>

</body>
</html>

<!-- 
id="myForm": dùng để JavaScript bắt sự kiện submit

class="highlight": dùng để định dạng toàn bộ form bằng CSS

required, placeholder: giúp kiểm tra đầu vào & gợi ý

document.getElementById(...): truy cập phần tử trong JS

Thẻ <style> viết CSS trong HTML

Thẻ <script> viết JS tương tác với form
-->
```
## IV, Thẻ Div, span, Phân biệt thẻ div và span
### 1. Khái niệm

| Thẻ     | Mục đích                                 | Loại phần tử |
|----------|------------------------------------------|---------------|
| `<div>` | Dùng để bao khối nội dung lớn            | Block element |
| `<span>`| Dùng để bao một đoạn văn bản ngắn, nội dòng | Inline element |

---

### 2. Bảng so sánh thẻ `<div>` và `<span>`

| Tiêu chí             | `<div>`                               | `<span>`                            |
|----------------------|----------------------------------------|--------------------------------------|
| Loại phần tử         | Block (chiếm toàn bộ chiều ngang)      | Inline (nằm trong dòng văn bản)      |
| Dùng khi nào         | Chia layout, khối nội dung lớn         | Định dạng 1 phần nhỏ trong dòng      |
| Xuống dòng tự động   |  Có                                  |  Không                              |
| Thường dùng với      | layout, container, section             | highlight từ, đổi màu, tô đậm đoạn   |
| Có thể thêm class/id |  Có                                  | Có                                 |

---

### 3. Ví dụ sử dụng `<div>` – chia bố cục trang

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      padding: 10px;
      margin: 5px;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>

  <div class="header">Đây là phần đầu trang</div>
  <div class="main">Nội dung chính của website</div>
  <div class="footer">Đây là phần chân trang</div>

</body>
</html>
```

### 4. Ví dụ sử dụng `<span>` – định dạng nội dung nhỏ
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .highlight {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <p>
    Xin chào, tôi là <span class="highlight">Ánh</span> kkk.
  </p>

</body>
</html>
```
#### Tóm lại:
 - **`div` thường dùng cho:**
     - Layout trang
     - Tạo container, sidebar, header, footer
     - Flexbox, Grid

 - **span thường dùng cho:**
     - Tô màu từ trong đoạn văn
     - Làm tooltip, nhãn
     - Gắn icon vào dòng

