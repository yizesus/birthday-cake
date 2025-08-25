import React, { useRef } from "react";

export const Cake = ({ candleVisible }: { candleVisible: boolean }) => {
  const noteRef = useRef<HTMLDivElement>(null);

  const scrollToNote = () => {
    noteRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="cake">
        <div className="plate"></div>
        <div className="layer layer-bottom"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-top"></div>
        <div className="icing"></div>
        <div className="drip drip1"></div>
        <div className="drip drip2"></div>
        <div className="drip drip3"></div>
        <div id="candle" className="candle">
          {candleVisible ? <div className="flame"></div> : null}
        </div>
      </div>
      <div className="note-button" style={{ marginBottom: '90px', textAlign: 'center'}}>
        <button onClick={scrollToNote} style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}>
          Đọc thư🎉
        </button>
      </div>
      <div
        className="birthday-note"
        ref={noteRef}
        style={{ marginTop: '50px', textAlign: 'center', whiteSpace: 'pre-line', }}
      >
        Gửi Mia,
        <br />
        <br />
        Hôm nay là một ngày đặc biệt, vì thế giới này đã có thêm một người tuyệt vời – chính là em. Anh chúc cho tuổi mới của em thật nhiều sức khỏe, hạnh phúc và may mắn trên con đường mà em đang chọn.
        <br />
        <br />
        Dù chúng ta không còn đi cùng nhau như trước, nhưng anh vẫn luôn trân trọng khoảng thời gian đã từng có, vì nó là một phần rất đẹp trong ký ức của anh. Anh mong rằng em sẽ luôn giữ nụ cười thật tươi, sống hết mình với ước mơ, và tìm thấy những người, những điều làm em thật sự bình yên.
        <br />
        <br />
        Mong những ngày sắp tới của em đều được bao quanh bởi tình yêu thương, sự thành công và niềm vui giản dị mà em xứng đáng có.
        <br />
        <br />
        Tuổi mới, một hành trình mới – hãy sống thật rực rỡ, Mia nhé.
        <br />
        <br />
        Thân,
        <br />
        Quang
        <br />
        <br />
      </div>
    </>
  );
};
