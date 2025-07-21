# Phần 1: CSS Cơ bản
## I. CSS selectors: Khái niệm, cú pháp 
 - CSS (Cascading Style Sheets). Là ngôn ngữ dùng để định dạng kiểu hiển thị cho các phần tử HTML.
 - CSS được sử dụng cùng với HTML và JavaScript trong hầu hết các trang web để tạo giao diện người dùng cho các ứng dụng web và giao diện người dùng cho nhiều ứng dụng di động.


 - Cú pháp:
 ```css
 selector{
    property: value;
 }
 ```
 - Trong đó:
     - selector: Bộ chọn cho biết phần tử HTML bạn muốn tạo kiểu cách. Nó có thể là bất kỳ thẻ nào như `<h1>`, `<title>`,...
     - property: Được gọi là một kiểu của thuộc tính của phần tử HTML. Nó có thể là color, border,...
     - value: Các giá trị được gán cho thuộc tính CSS. 
 - Ví dụ:
  ```css
  h1{
    color: red; 
    front-size:11px;
  }
  ```
 - Bộ chọn CSS được chia thành 5 loại:
     - Simple selectors (Bộ chọn đơn giản)
     - Combinator selectors (Bộ chọn tổ hợp)
     - Pseudo-class selectors (Bộ chọn lớp giả)
     - Pseudo-elements selectors (Bộ chọn phần tử giả)
     - Attribute selectors (Bộ chọn thuộc tính)
 - Các loại CSS Selector cơ bản:
 
| **Loại Selector**   | **Mô tả**                                     | **Ví dụ**                       |
| ------------------- | --------------------------------------------- | ------------------------------- |
| Element selector        | Áp dụng cho toàn bộ thẻ HTML cùng loại        | `p { color: red; }`             |
| Class selector      | Áp dụng cho các phần tử có class cụ thể (tên class ko bắt đầu bằng số) - hay dùng nhất       | `.menu { font-size: 18px; }`    |
| ID selector         | Áp dụng cho phần tử có id cụ thể (duy nhất)   | `#header { background: blue; }` |
| Universal selector (Bộ chọn chung)  | Áp dụng cho tất cả các phần tử                | `* { text-align: center; }`              |
| Group selector (Bộ chọn theo nhóm)     | Gộp nhiều selector có cùng thuộc tính và giá trị lại                        | `h1, h2, p { color: green; }`   |

## II. 3 kiểu chèn CSS

### 1. Inline CSS
 - 	Chèn trực tiếp trong thẻ HTML bằng thuộc tính style.
```html
<h1 style="color: blue;">Tiêu đề</h1>
```

### 2. Internal CSS
 - Chèn trong cặp thẻ `<style>` trong phần `<head>` của tài liệu HTML.
```html
<head>
  <style>
    p {
      font-size: 16px;
      color: red;
    }
  </style>
</head>
```

### 3. External CSS
 - Tạo file .css riêng và liên kết với HTML qua thẻ `<link>`. 
 - HTML:
``` html
<link rel="stylesheet" href="style.css">
```
 - style.css
```css
body {
  background-color: #f0f0f0;
}
```
 - Inline chỉ nên dùng tạm thời hoặc test nhanh.

 - Internal phù hợp với tài liệu đơn, nhỏ.

 - External là cách tốt nhất, giúp tách biệt nội dung và kiểu dáng, dễ bảo trì.
## III. Colors, Backgrounds, Height, Width, Z-index, Overflow, Opacity
### 1. Colors
 - Sử dụng theo mã Hex
### 2. Backgrounds

| Thuộc tính CSS             | Mô tả                                                                 | Ví dụ                                             |
|----------------------------|----------------------------------------------------------------------|---------------------------------------------------|
| `background-color`         | Đặt màu nền cho phần tử.                                             | `background-color: red;`                    |
| `background-image`         | Đặt hình nền bằng ảnh.                                               | `background-image: url("image.jpg");`             |
| `background-repeat`        | Xác định việc lặp lại hình nền.                                      | `background-repeat: no-repeat;`                   |
| `background-position`      | Xác định vị trí hiển thị hình nền.                                   | `background-position: center center;`             |
| `background-size`          | Điều chỉnh kích thước hình nền.                                      | `background-size: cover;`                         |
| `background-attachment`    | Quyết định hình nền có cuộn theo nội dung không.                     | `background-attachment: fixed;`                   |
| `background-origin`        | Xác định điểm bắt đầu vẽ hình nền (padding-box, border-box, content-box). | `background-origin: content-box;`           |
| `background-clip`          | Xác định vùng mà hình nền được vẽ lên.                              | `background-clip: padding-box;`                   |
| `background-blend-mode`    | Trộn màu nền với ảnh nền (blend effect).                            | `background-blend-mode: multiply;`                |
| `background` (shorthand)   | Viết tắt tất cả các thuộc tính trên trong một dòng.                 | `background: url("img.jpg") no-repeat center / cover lightblue;` |

 - Viết tắt với background shorthand
 ```css
 background: [color] [image] [position] / [size] [repeat] [attachment] [origin] [clip];
```
 - ví dụ:
```css
background: #ffcc00 url("con-lon.jpg") center / cover no-repeat fixed padding-box content-box;
```
 ->  Không cần ghi đủ hết, chỉ cần ghi đúng thứ tự nếu dùng shorthand.
 - Các giá trị thường gặp và cách dùng
     - background-repeat

    | Giá trị     | Kết quả                              |
    | ----------- | ------------------------------------ |
    | `repeat`    | (mặc định) Lặp cả chiều ngang và dọc |
    | `no-repeat` | Không lặp                            |
    | `repeat-x`  | Lặp theo chiều ngang                 |
    | `repeat-y`  | Lặp theo chiều dọc                   |

     - background-size

    | Giá trị     | Kết quả                                                         |
    | ----------- | --------------------------------------------------------------- |
    | `auto`      | Giữ nguyên kích thước ảnh                                       |
    | `cover`     | Phủ kín vùng nền, **có thể bị cắt ảnh**                         |
    | `contain`   | Co ảnh vừa vùng nền, **không cắt nhưng có thể dư khoảng trắng** |
    | `100% 100%` | Co ảnh khít vùng, **có thể bị méo nếu không đúng tỉ lệ**        |
     - background-attachment

    | Giá trị  | Ý nghĩa                               |
    | -------- | ------------------------------------- |
    | `scroll` | Ảnh nền cuộn theo nội dung (mặc định) |
    | `fixed`  | Ảnh nền đứng yên khi cuộn trang       |
    | `local`  | Cuộn theo phần tử (ít dùng hơn)       |

### 3.  Height, Width, Z-index, Overflow, Opacity
| Thuộc tính | Ý nghĩa ngắn gọn                                                                  |
| ---------- | --------------------------------------------------------------------------------- |
| `height`   | Chiều cao của phần tử                                                             |
| `width`    | Chiều rộng của phần tử                                                            |
| `z-index`  | Xác định thứ tự chồng lớp (cao hơn sẽ nằm trên) – chỉ hoạt động khi có `position` |
| `overflow` | Xử lý nội dung vượt ra ngoài (`visible`, `hidden`, `scroll`, `auto`)              |
| `opacity`  | Độ mờ (0 = trong suốt hoàn toàn, 1 = hiển thị hoàn toàn)                          |

## IV. Box Model, Borders, Padding, Margins
## V. Text, Fonts, Icons, List, Table
## VI. Display (inline, block, none)
## VII. Position (static, fixed, realative, absolute, sticky, ...)
## VIII. Combinator selectors
"Pseudo-elements 
Pseudo-classes"
Relative & Absolute Units (rem, em, cm, px, ...)
!important
Math Functions
Variables, Box Sizing, Reset CSS