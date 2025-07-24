# Buổi 3: CSS Layout & Thành phần cơ bản

---

## **Phần 2: Flex, Grid Layout**

### 1. Flexbox
 - Flexbox Layout là một kiểu bố cục trang có khả năng:
   - Tự cân đối kích thước
   - Thay đổi chiều rộng/chiều cao
   - Thay đổi thứ tự phần tử
 - Flexbox có 2 thành phần là:
   - container: là phần tử cha dùng để bọc bên ngoài.
   - item: là phần tử con của container.


### 2. Các thuộc tính: `direction`, `wrap`, `flow`

  - **display flex**
     - Giúp sắp xếp các phần tử một cách dễ dàng, linh hoạt hơn trước.
     - Cú pháp:
```css
    selector {
        display: gia-tri;
    }
```
| **Giá trị**   | **Ví dụ**                                                       | **Mô tả**                                                                         |
| ------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `flex`        | `.container {display: flex;}`        | Giúp các thành phần linh hoạt. Chiều rộng bằng 100%.                              |
| `inline-flex` | `.container {display: inline-flex;}` | Giúp các thành phần linh hoạt. Chiều rộng bằng chiều rộng của các item bên trong. |

   - **flex-direction**
     - Xác định hướng của main-axis để container sắp xếp lại các item.
     - Cú pháp:
      ```css
          selector {
              flex-direction: gia-tri;
          }
      ```

     - Các giá trị thường gặp:
       - `row`: item được sắp xếp theo chiều ngang từ trái qua phải
       - `row-reverse`: item được sx theo chiều ngang từ phải qua trái
       - `column`: item được sắp xếp theo chiều dọc, từ trên xuống dưới.
       - `column-reverse`: item được sắp xếp theo chiều dọc, từ dưới lên trên.

  - **flex-wrap**
     - Cho phép item có tự động xuống dòng hay không khi kích thước container thay đổi
     - Cú pháp:
      ```css
      selector {
        flex-wrap: gia-tri
      }
      ```
     - Các giá trị thường gặp:
       - nowrap: mặc định tất cả các item sẽ nằm trên 1 dòng
       - wrap: khi tổng chiều rộng các item cộng lại lớn hơn chiều rộng của 1 container thì item sẽ tự động xuống dòng
       - wrap-reverse: Tương tự như wrap, nhưng thay vì xuống dòng thì item sẽ tự động nhảy lên trên.

   - **justify-content**
     - Thuộc tính justify-content để điều chỉnh vị trí bắt đầu và căn chỉnh các item theo trục main-axis.
     - Cú pháp:
      ```css
      selector {
          justify-content: gia-tri;
      }
      ```
     - Các giá trị thường gặp:
       - flex-start: Mặc định. Item sẽ bắt đầu từ lề chính main-start của container.
       - flex-end: item sẽ bắt đầu từ lề chính main-end của container (khác với flex-direction: row-reverse; là đổi hướng hiển thị).
       - center: item sẽ nằm giữa container
       - space-between: khoảng cách giữa các item bằng nhau item đầu tiên và cuối cùng sát với lề
       - space-around: tương tự space-between, nhưng khác ở chỗ: Khoảng cách giữa item và lề = 1/2 khoảng cách giữa item và item.
       - space-evenly: Tương tự space-between, nhưng khác ở chỗ: Khoảng cách giữa item và lề = khoảng cách giữa item và item.

   - **align-items**
     - Thuộc tính align-items sử dụng để điều chỉnh vị trí bắt đầu và căn chỉnh các item theo trục cross-axis.
     - Dùng để căn chỉnh cho một dòng.
     - Cú pháp
      ```css
      selector {
          align-items: gia-tri;
      }
      ```
     - Các giá trị thường gặp:
       - stretch: Các phần tử sẽ tự động tăng chiều cao để lấp đầy chiều cao của container, nhưng sẽ ưu tiên giá trị height của item hơn (nếu có).
       - flex-start: item sẽ bắt đầu từ lề cross-start của container.
       - flex-end: item sẽ bắt đầu từ lề cross-end của container
       - center: item sẽ căn giữa theo chiều của cross-axis
       - stretch: các phần tử tự động tăng 
   - **align-content**
     - Thuộc tính align-content sử dụng để điều chỉnh vị trí bắt đầu và căn chỉnh các item theo trục cross-axis.
     - Dùng để căn chỉnh cho nhiều dòng.
     - Cú pháp:
      ```css
      selector {
          align-content: gia-tri;
      }
      ```
     - Các giá trị thường gặp:
       - stretch: Các phần tử tự động tăng chiều cao sao cho lấp đầy container (vẫn ưu tiên height nếu có)
       - flex-start: Item sẽ bắt đầu từ lề chứa cross-start của container.
       - flex-end: Item sẽ bắt đầu từ lề chứa cross-end của container.
       - center: Item sẽ nằm giữa container căn theo cross-axis.
       - space-between: Khoảng cách giữa các item bằng nhau.Item đầu tiên và cuối cùng sát với lề.
       - space-around: Tương tự space-between, nhưng khác ở chỗ: Khoảng cách giữa item và lề = 1/2 khoảng cách giữa item và item.
       - space-evenly: Tương tự space-between, nhưng khác ở chỗ: Khoảng cách giữa item và lề = khoảng cách giữa item và item.
   - **align-seft**
     - Tương tự như align-items nhưng là áp dụng cho một item nào đó.
     - Cú pháp:
      ```css
      selector {
          align-seft: gia-tri;
      }
      ```
     - Các giá trị thường gặp:
       - auto: mặc định
       - stretch: các phần tử sẽ tự động tăng chiều cao để lấp đầy container (ưu tiên height)
       - flex-start: item sẽ bắt đầu từ lề cross-start của container
       - flex-end: item sẽ bắt đầu từ lề cross-end của container
       - center: item sẽ căn giữa theo chiều của cross-axis

   - **order**
     - Dùng để sắp xếp lại vị trí của các item
     - Cú pháp:
      ```css
      selector {
        order: gia-tri; /*mặc định là 0*/
      }
      ```
     - Trong đó giá trị >=0


### 3. Grid
 - CSS Grid là một hệ thống bố cục 2 chiều cho phép bạn xếp các phần tử theo hàng và cột, giúp xây dựng layout web chính xác, linh hoạt, gọn gàng.
 - Khác với Flexbox (1 chiều), Grid hỗ trợ cả chiều ngang và chiều dọc cùng lúc.
 - Dùng `display: grid;` hoặc `display: inline-grid;` cho phần tử container.
 - Thuộc tính của Grid:

| **Chủ đề**                   | **Thuộc tính / Cú pháp**                                                 | **Mô tả**                                           | **Ví dụ**                                                       |
| ---------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------- | --------------------------------------------------------------- |
| **1. Chia hàng và cột**      | `grid-template-columns`, `grid-template-rows`                            | Xác định số lượng và kích thước cột/hàng.           | `grid-template-columns: 200px 1fr;`                             |
| **2. Khoảng cách giữa ô**    | `gap`, `row-gap`, `column-gap`                                           | Tạo khoảng cách giữa hàng và cột.                   | `gap: 10px; column-gap: 20px;`                                  |
| **3. Dùng `repeat()`**       | `repeat()`                                                               | Lặp lại kích thước cột/hàng cho gọn.                | `grid-template-columns: repeat(3, 1fr);`                        |
| **4. Chia theo trọng số**    | `fr` đơn vị                                                              | Phân chia không gian theo tỷ lệ.                    | `grid-template-columns: 1fr 2fr;`                               |
| **5. Sử dụng auto**          | `auto`, `grid-auto-rows`, `grid-auto-columns`                            | Tự động tính toán kích thước hàng/cột.              | `grid-auto-rows: 100px;`                                        |
| **6. Định vị phần tử**       | `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end` | Chỉ định phần tử nằm ở vị trí nào.                  | `grid-column: 2 / 4;`                                           |
| **7. Grid Area**             | `grid-area`, `grid-template-areas`                                       | Đặt tên cho khu vực và gán cho phần tử.             | `.box { grid-area: header; }`                                   |
| **8. Viết tắt nhanh**        | `grid`, `grid-column`, `grid-row`                                        | Viết tắt nhóm thuộc tính liên quan.                 | `grid: auto / 1fr 1fr;`                                         |
| **9. Dùng `span` mở rộng**   | `grid-column: span N`                                                    | Phần tử mở rộng N cột hoặc hàng.                    | `grid-column: span 2;`                                          |
| **10. Dùng tên vùng**        | `grid-template-areas`, `grid-area`                                       | Tạo bố cục bằng tên và gán tên cho phần tử.         | `grid-template-areas: "nav nav" "main sidebar";`                |
| **11. Grid Auto Flow**       | `grid-auto-flow: row`, `column`, `dense`                                 | Quy định cách phần tử tự động được chèn vào.        | `grid-auto-flow: column;`                                       |
| **12. Auto-fill / Auto-fit** | `repeat(auto-fill, ...)`, `auto-fit`                                     | Tự động lấp đầy không gian với số lượng ô thay đổi. | `grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));` |


---

## **Phần 3: Responsive**
### Media Queries
 - Tính năng này cho phép ta tùy chỉnh CSS cho nhiều thiết bị khác nhau từ máy tính cho đến ipad, điện thoại và các thiết bị in ấn.
 - Cú pháp:
```css
@media mediaType and (mediaFeature) {
	// Code
}
```
 - Trong đó: 
   - mediaType gồm các thuộc tính hay sử dụng sau:
     - all: Dùng cho mọi thiết bị
     - print: Dùng cho máy in
     - screen: Dùng cho máy tính và các thiết bị di động
   - mediaFeature gồm các thuộc tính hay sử dụng sau:
     - max-width: Chiều rộng tối đa của viewport
     - min-width: Chiều rộng tối thiểu của viewport

 - PC first (Responsive):
   - PC first là khái niệm để chỉ việc lập trình giao diện từ màn hình to đến màn hình nhỏ.
   - Để làm việc với mô hình này chúng ta sử dụng max-width trong media query.
   - Dưới đây là các media query điển hình:
![alt text](image.png)

```css
     /*Ipad ngang(1024 x 768)*/
      @media screen and (max-width: 1024px) {
        /* Code */
      }
      /*Ipad dọc(768 x 1024)*/
      @media screen and (max-width: 768px) {
        /* Code */
      }
      /* Smart phone (480 x 640)*/
      @media screen and (max-width: 480px) {
        /* Code */
      }
      /* Smart phone nhỏ */
      @media screen and (max-width: 320px) {
        /* Code */
      }
```
---

## **Phần 4: Một số thành phần cơ bản**

- **Nav bar**
- **Dropdowns**
- **Forms**