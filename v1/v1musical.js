var express= require("express");
var app =express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/weeknd");
 
var songSchema = new mongoose.Schema({
    name : String ,
    image : String
});

var Song = mongoose.model("Song" ,songSchema);

// Song.create({
//     name:"BBTM" ,
//     image :"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBcYGBgWGBcXFxUYFxcXGBcXGhUYHSggGh0lHRgWITEhJSkrLi4uGB8zODMtNygtLisBCgoKDQ0NDw8PFSsZFRkrKysrKzctLTcrLS0tLSsrKy0rLSsrKystLSsrKysrKysrKysrKystKysrKy0rKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xABIEAABAwIEAwYEAwYEBAILAAABAAIRAyEEEjFBBVFhBhMicYGRBzKhscHR8BQjQlJi4TNygtI0ssLxFSQWNUNTc4OToqOzw//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/APIE0hSFOZlh0zMeHkTN59JQQIQ39ap0DkgantKUMbyQ6mNkQpTSUQnBsoIwpqVCZJsAE9lIDX8lIGMnSRzv+Kmq56dOVevp0nUxUpvc03D2FocacaOABBLXXPQyLwqurVAGRvME2i4SZ6kg6Eb2m53QdFFjD8znVDaA1pvFyLnSFFia2Zxc7U3tci2nQKNziTIMEyDFvPyUUEaIJg4QMwBWpxHY+n+wU8ZSqyTm7xkZmgNmwjxAiDzWSfVzBoiIEE7lb34bYwOo18K+SHOoubuIc9tN7Y2mQUGGxGCytzh7HNzZJBmDlJ9rG65h7q47K02nFDD1GZ2VXd0QTo8O8Dp6ER6lafjnYjD0ntacS2i9+YsbUIymCDB0585vugwFdpzEwBJPlEqNWPE8C5hJDRlDi0upuz05HXVp6FcBcQqAJyQO8vYKWegQRylcU/KEopDmg5gngqZuQfNmIubWP1Vp2t4VTw1ZrKeYtdTY/wARBIJmbgaWQUpclaLoyidwgOQdHfFC5roRCpDulhN3H62KKQNSgJzkNQBCE6o6TKbCAUxpwPvb3H2TqNOJNp0+hkqTu5iDtfoBqVBAfp7KWlSJMFBcNh9d9lJTYSDbmNR6WPkgbTgHSTOvqkrWgGx9bjn+CfTcWgEC5drtMAx57ptCgS4QRJ67z/FyQROECSLae36+qjDynYh3iiZAkTsTuUwBUSUKOabiwm5ieg5laLsc8sfiKrTDaGHfUInVwew0wRvDmgrPNpc1Z4Gq+jTrNY4BtamabwQLtmddjIF1NFMJBmTIMzMGec891JVxBfJqFz3GIc5xcdpkm5sB7JKrpjTSLCOt+eqiVElGqW6G242I6jcLY4DtLg24cvdg6X7UyA1ob4Kki7jrli9vZYyo2EgO6Dqr5HQ5ohzruAs0E7NGw5f2UKKVYtOYWO2lvQrsw+EdUY94ZanlzOGkvOVjI5uJt5FQcaa4orAgkGxBgjkRqFFKoetnxmnSdiGvxBilRwtBxb/FWLhZjfMmDyErGU6gF4mFou1eMo1q9AB8sp0mMc9gDtAT4b3OgPK/JBR43FmrVfVIDS9xMN0bOwXOUp+yEQuZCSEqAKbNx6/b+6c4Jg1Hr+CKcUIKEChBShOCCTC1CbOuBYXiJmDPmnP1jY8twCnYCmHOcHZoIvlEm3IFc3fSYGnOLmFBMRGmnoY9eadTBNp8r7n81KylJDSYBuNxFzcbpKrwPC35RfkTAPJQRVT4W+Z85Ef2UTnkkknXXb6BSl7S0CDmm5tER95lRKwK1n6lOYy1ymBSSlEgC6O4d3NR4BytLGnkDUcY+jXLnY4LX4nh/dcBNR1zicVTLdRlbSlo8wSHn/UEGHnZRuEJ8JHBUBJdtoL/AGukhKx5EwSJsYJEjkeaCd7oEXfRr1e5dSpwWPLajwPnaaMkPI1Ahx0kW2K4mK37LYmlTqVTWMNdh6rAL+JziwBtuYBQUtR0knmSUxSOYdYidBrr+tUjQiGAKQa8l0YekCQOZChxJ8bv8zh7EhFNCbKVNKIWUJsoQTPCa1oteDDj5/LAH19lIQoSPEPVFKkKUoQCUJEqAKic1TQkLUFg5zXsBabtbJm0XjLyPouMqenTDGEudLjZrdgDDi4nnJFvNRwoGQiErzEq67U8BODr92XZmODXMcbTIEg7SDI9kFMAnFu6mw+FLzDAXHfKJ+yZimZCQ6x5AgkexsgjcbE8gV7J8TsDk4LhaZhrqIw2ZgjUsDD1sXrxZrzrMfW66H4io9xdUqPe46l7nOJ8y4nkEERakhTGFG5BG4JxLcm+aT5RAj1mUSmEKhYsiU5g/P8ABMKB5rTrOa1/eZH2hd/BcCK+Jp0CYD3EZoBcIaXRte0eqrXM5eo5clZdmca6hiG4gMDu48bpnK1vykmNzmIHUhBBgccGOpuyhxzMdB+XUGDzScde04muWAZTVqERoAXHRROYxpEGDYwYIAJkAkbxE9ZUVUeJ2/id9yoGlNITiEjlUNhCEIJC5NJuD0/NOiUOZESNQEUiCkCJQKhLCEACrvsjiaVKuataIZTqOYCJD6oHgBtpqfQKjUzngRADoG4m+8Xvsgiq1HOOZxkmXE8ybk26qSi0nTl0S0nSbgAdGgfYJcViy5xNhoLACwsNraIOrD0aYh1VxsR4WCSd7l0AD3Xfiu1GK719YV3tNWxpgDugzZmR8hwjpzVA0yle+UHXjuK1axms7O23g+VluTGwB7LhCUuQRv5fVAoUgKjanhBISmEo5z6fRNKBSUMEkDn+KaQhvugsBgXPqOp0ml+UG7ZMx/FOgbPNcE9NF1sx9RlJ9Nr3NbVLe8AMZw0GGu3I8Uxoo6pkSfmJHlAAgyg52ut+H5fVWrK7m4NwEAOxADubiKWZhM7NuQOZnZVg5Rr+tFY1cNGFYQ6XGo9xYJ8LWBrA88zJI6COaCse6SSdTrt9k7ubF0jmRNxpt5lMKcN/I/ZA1I9AQ8yiGoQhEK1ydVdDgQTpIKGAQZUnhtMG3MjfRGkOZICleBrBA6GU3KOZ9QgcngJrmjZwP0+6UNKAQiDySZkQ7NAKja2bDUqSt8o8zfmrLs7hc1SYmNAeoN/T8UV2cC7Pd5BeeVukhehYLsqwNgMYB6ExM3MLl4RhAwttI/PyW44UGwLAdY1MLNqqjBdk6IM93TnfwiPbdXbOytIsg02Q7URbWYO0StHhsOA1TCi2IUHn/FPh1hnC1JskXgR6jrf6BZjHfDWi0HK6oP1yI2XsWKIGsqj4hWZe0zqg8X4l2KLfkfOpMxyECImZWYxXDqlMgOYRIkWOkL2LjAymQzyuT6e6rcXhpG5BF5Jn9XV0eSpGld/GMCadVwgxqJ1iT7rkPSFpCMbIP66LroYMvBg2AAm0B/J06A6A7khdfAMEHmtmAIbh67tdC1hLHDmc0W6rkw9Utkh+SRGaJjffXT9QoOIg3tpHQi/9iu7grhmeXTl7mtnMaWsZGniDL810V3Uq4cS4Uq1i50g0akACYJDqbtXaOBJ2TsfVw9PDto0P3lR4zV6xzAA5pZSptI+VsAlx+YxsFRUurjZqaxxJCihPpi/ofsUD30YidT9uajKcLgztEep0SVTp5n8EDZQklCIew69QR/dIENStMIAJ7yIAGu/UqOVJh65YSREwRcTEopBWO5S5gdm+w/BRJSEEobuI9HQfaUs2kkxpcBw+t1zlWXZrB062KpU6rg2m50PcSQGtg3J2Gl+qCHEUJbRgyX5yBGUZWuLZnTVrh6K34Tj6eHAzGXcmifOZhP7XYbDUsV3eEq99SoUG0885ganiLyCLHxOm1rrv4L2doNYKmIl1hLTECZv9tVBZYLttQLg3u3kTF8o9Re3kvUOzXE6FcNyHxH+FzY0N9NdPqvJsXgsFWBFOhkgWcz11GhTeBA4aqxwqPBY7MGuBm2gGx1+uqivfquErEWfT8ix0E+QfooWsxkWOG9W1R/1JOCcbZWa24mNvJXBdZFZfiTMfZoOFM/0Vrf8A33VFjOC48gu7zDelOqOXOr5K57Q8acARTFwOtzpljcbwvMuJ8c4i5zslOA3LlOYufJIuABDhuZAiTCI0eL4fjxq/DHb/AA6v+9cGJweNDQf/ACx2+WsIvvL4H91Sv7S49jR39KoyQXSWkNcAdcx0MiwOq0fCuPtxNIRlDxBjTNpPh9EGJ4vwHEOJqVG0bwIHee/zLPCi2nnDm03ZhAJ7zwmQcwh3pvqvWqxa5kG4Olr76X6Ly7tFh+7e5ugmRHXl6fZErk4fxMUSTkpOkRD21CI3EAjXQ9CuOvUzaOGpP8QAk6AEaBc9TVLSpEk5QTlBcY2aNSelx7rQQoBSlsIhEBT2DXyP2KYnMH2P2KKXDzNt7ec2hMxIgkciR7WV12YANdgInLmd7C19lS1rknm5335oIJKE9CIcEqaE9FIgFIhBIwA6p7KBIJGg1KiYpZcRG30QJh8K+o9tOm0ve8hrWtElxOgAU/HsP+zvOHDgXM8NYtuDUvmaDu1tm9SCr7BYw4TBmpS8OJrFoZWbZ1GlL5yuOjqmV1xBhiyeIpuBGa5cM0kyTJN55zKCz4fgC2m2YzVRLRqcofBJG0kW8uquuK411R9PDsbmcSAMzgxulwXHT1+qZ2cpA5HCSGsaL/zGS70kmPNariHZc1mNLWw9pkHQCd1kRcWwT+GVcLRrDDVO/aT4n1KVOlBAl1X1ImBEdVP+zVMfhmVmYcUqPePZna/vWsc10ZjYODDpMRuV0DA4ysynRxjP2mnTcHNFSC4QdO8jNEWiTO6uuMYypSw7aNJjqFBrSwNY7USSWjwiLnXkis98O+IP74MFrm4NjlMEtP8ALY33lexcYrAUzldBAnovPPhzwSkHGsQYsANuXt+K0/HqDqrSKbpI25+fJQeZdoOOVGucA5xAIk7DMbCdybwOi7Oxb3VX3LsxkwwjNEAnkAdFNV7PD95UqtdUaHZhTDiwONhOcAm4GllP2p4ZSrU8NW4fh6TXYfvM9CtTIpuD2AFznNs5wLQAS7Uqi1rdpDRqmlWBLD4f3rQHCT8ro8J1HmqnjfBqRIxGFhrxfK0Q0jTnbf3Wf4lwMYfB02CtWq413+Kwhz6MEeEE1AILQQMzdb2sIu+BYTEU2sbUY4FzRDRoOcT5oHYDxQSCHHa2o/K6x3bunBY7/MCefL8VuSDTfYOB5Qb3usV2+eCwHcvFsvQzdIMVU1Vu+lTZgg5lV3fVauWo1vyCm1udgPXNDvUKmUjahy5dpn1gD8FpDUISoAKXDU8zgBqZiTA0O6hXTgiM1xsd4mxtOyBlKs5jiWuINxI/VxZQ1HajYGY8429k+pY3UTnSTHL7BA2UIlCIko/M3zH3TnnbqmUzceY+6fX+Z3mfuio0IQiFBUwqeHr95XVhuElw8T2s3uQSR5AqPFYEtBhwcB4vD01sivQsF2fZxDhGFbSxOHZXourufTe8MMvf4J5Q0WkR4tVVcW7B4mq2gKbaTXUqLaVQur0A172ucczMrySIdEkA20WJFJrg05dZtroY1hMfSaP4RP1Qep8G7M16RbndTaBAnvaUQP8AV5rf8NxGHaMr8VRbtHfUtv8AUvBuA8BpVwJkEki0WvGpHqt5w34R4WoBNatJ/lFM/wDSs8V6KePcNbY4/Czof/MUwZ0/mWe7S8cwdaGMx+GDZFxWpw0bkXublVjfgxgyYGJxH/4/9iqeMfCuhTFTuauIrOpgF1NndZoIkuEwIA21KcG9wnaPhNKk2m3HYcZQBapy8vuqrF9qsEyqH0sfQc0/NLz9g26xvCfh7ga9AVhjK7BEkOYwFvOZjqoeBdg+G4yo6lhuJVXVGjNldhy2RzBdFpQehN7dcLmHYoOBiMrah/6Vx4/4icIYC0VKrzJBDKbyD18UD6qpwfwPpvYHDHPvsKTfIj5+akZ8B2749/8A9Bv+9Xg4z8SuGjShinciRT+5qSufFfFmibMw1WNsz2COtp2XfV+BAAtjyfOgB/8A0VTifhA5h/4sEc+6P+5OIp8Z8QcxkUb9X/k1Z3ifGzXIzDLedSVqsZ8NhTEuxJPTu4+7lJ2b+HlLEU6bzWc11R72hoDYAY5wLiSJ0E+sJwYWkW6locOWYt06hN9IXtx7A4Sjgq+Wk01RSrgVT4ngta7K5pPymwNua8r49xhuLZQeWtZWp0xSqGzRUDY7t8/zQSCE0UpSwn92enoWn8VHmHMe4VApKLvEPUe4j8VFmHMe4T6IBc0SACQJJAAk3JJ0CCNoJgbm3uu/ihHf14ZlDfAByyBrL+eU+6TMxuJc5vjY2oXtAAdmDTmaMu4mL6RJXIJgudOZxvIIncmTrJP0QRoSpUDQVLiDLied/e6ildGKZDo/pafdoKIgQhCKUFS0nXHPT3UQUlMwQeRH0vogWk/wgD+EuHobgWHR3um1G6p9ClL6oB0aXjrl8Rjl4S4/6UzVBruwQmQZ1JtGq9f4DVygXsNtxK8W7GV8jz6gHXkSPoCvS38WbSovcSIG/UzH0CzVjU8Q4nTYHeK+5mI1062XmXaXtW2Zwpc6qQWucCYA5W1XM3EuxLC6s8spk5YBiQDIGb1vpoOqu+GGkw/u2Na1seIiZEWM7236oOjCY2rQ4eyoaQe51QFwIuWAC462n2Vt2c403E03HDsp0C67v3YDiSIL5GoMnXcFNwHEcPUEvpsLrm0gkXiGgwE0cNpZnVMM/K8gNLJGjRYNHyqK3XBnCnTZT1yiJ/H1VmXLCcI7QR4KrIeI2gGQb38lq8NjQR1iPoqJMSb/AGVFxOp83TXzVti6un2WQ7RcQyMcd42nYx+SDI9r+LgBwB22vbf6LX/DngTG4WlUGYVDSYXX8Jzy53h9RfoOq8e4nVdXe1gk53tZ5gmLDf8A7r3NuDdh2F7XOc+o5rWsGjGCzWCTAgb76oip+JHGBhMBXaD46pNKn/8ANALnf6W5j5wvn8R6clrvifx44nF93mllCWCCCM9u8MjU2DZ/pMLIhWIgfQMnlbW1jMfYpoocyB5SV0VP15fq6jKoDTYDYOP+Yx9G/mgAcgPT80iERN+0PiA4gcgSB7BMzJqUhAsoTZQgVS1qsm5vAGxsBA3USHi6Ac8dfb+6G1BvI9EgCCEU972jR0+hH3Tu/ZAuetiosqbkQdODxAZXp1BcBzZtYj5XCDraR6pcXTDXva0y1rnNBuJAJDTB0sFyVG2XU4k+PY79SBI80HbwmsQCB/C4VNYJgRl9Vp38SNbCEZwHZmtdrMdY5iBpFwsVQflcCDH4bH6K34ZimscCQXBrpAAHUyOcADyUo2LeFZqLWvYQMxcQLF3oDEcgtLwDA0wPEAWgaOMCZJGv6suDh+JFUNc243vNxeJ0Ouy0beBte27nCQdNJ0mFFT/+j1B7M2QB5iCwiDGgsqPiXC3sLTScWEH5oJHT9ea0vDezLqV21HXAmY5a+6nr4UCx0tr0/X0UViK2IrOYDiGBhaS0uzRnaWmDl1F1r+zeOz09ZLYaTvIA16qHimCa5hzAEQZH81lmuF8dbSo+CATLiLaEnlzgoNrxPiTabXFxFgTc8ua817Q8TdWz6taYEjXrAO2l1DjeLmqH5fELgzaYtO9rk31VZjhULMpp1mtdcPyPIqBoh2UxFzAEeiqOfshiaIx1DvnNYxrnPvDW5mthkk2uSTPRaj4i/ERpYMPhXh1TR9VjpDNoa6PE4jlpzXmOMwtW7nUqoBgCabxYeYXDUbl+aWn+oEfdXEKE46JtO+hE+fK/5pxMqoseC02ubiJ1GGqlo6tyn6CVVzaOcFX3Zx/cirinNzNpNyBuz6ldr6YbPQEki9gqAxsIGw5DYIohKEAoRAlfoPVIVJV+Vn+r7hFQoQhA5K5IFZcXotDMKWgAuoNLo3OZ4k9bIitQUiVAIhCVB18Lw4qvNLd7Hht48bWlzPcty/6lyU6ssDf5ST7xNuhH1RTeWkOaYIIIO4IuCpOI0HAtqGP3ozyIHiJIcIGlwTHIopkCJ/G/kurhuLyG+guLTcAwNdFw0SSY8z7XKflQeodl+LNp02tgFpcbjlEkjyM9LL0/hlVtSHC4uB1iR+C+cMJxNwAaSIEm87gWkbWWt4R2wfTY3xxlBkf230GnNZsV74HgCOViqriGKbqSItEwJ3gLzSt28qwC1wgudIFzG2uly3c2N1S4ntY40w57w6XBmWJgXlxP+WyYNbxvtGwuNMAvMu8IcW6Dfc+6yNfiLQ9w0aNGCAGCwgEbyDubndZ3GceJJy/zT0tvOomBboqo4pzibkkmTG8GdFcNbCjxruS/xFxbJAk5CabvAc0zYgtPPMrSp8YMSauZ1FpZADaTXkEHfxZbzyy2gLCUMFWq/K2zltOBdnW0W54l5HzET6Ac/wAlET8b+I2PbTLi1lI1LNaCXOp+E3JOptOgWGw3aTFMqGoKxc5xl3eBtVrvNtQEey7+2b5cOhvrqQs2Qd/1KsG1o9v4YQeH4J1QgDOaQAsQb0wLkkc1lcRVL3FxABcSTlAa2SdGtaAGjoFytKvuC4RhrjvrYenBru+UNa9p0JvmJMAC8hUMqVDTwIY4AmvWzibkMpNLM39JL3EeQKpYXXxarTdVd3MikDFMHUMGmvMkm/NcaIVCRKgE6ofC3pP3CaSkKKRCEIHLt4k7wYe0RRAB/mGd/wBrriaCTABJuYAJ0Emw5BWvESH0cJkl7mscx7A0ywmo5zNB/GDI5wiKoJCut1JrmyA5pAm7XERMAzFgTAnnZcpBGoI11BGhvryKBEoQklAqnwuKLMwytc13zNcLOjS4uCNiD+SgQgtcZwIimMTR/e4aTP8APTjVtRou0f1eRVU2uBe8iLgj1281ddk+NPoVmszDuarmsrNcAWuaSGkwdCAdRyVlW7Fu/wDEaeGbPdVCXgiDlptu8A7xYD/MEUmP4Eyt+8ouyucbtI8J6yBY6epVBT4XWLi1rZImYI5xN43n2K22FoGnWrUj/wCyqPZrPyuOW+/hylPdw2KglsZjJ8Ma7zzupqsnQ7NYxwMUiAObmgc41U+E7I13m5Y28aPcTzgNEGPNeqcJ4c4s+YX/AFqFYDBPbbOTrc3Im5Am/JTTHnPDeyFJk5/3rjAHeAsa13+WPFJIsfwVzguyLHTIzHQZGw1sTBmfFutbwjs+11Ql/jdB6D5vPUXWnocMAnQDp/ZDGL4d2fay7g0ut/2gWmU3ibIHK2nI29tFs6+BbaAOXtssv2hcGtPh0679NFBh6XZQYtlQtdFQNeROgcHNaAXC+npdeeY2g6nUdTqDxNJa7e46r37sBhiyg0uEPqh9Q2I1fI1/pDFX9t+w1HGvbVDjSqnwucACHj+HM0xfrOiso8i4HxSmwtZiGB+HJOcNYzvLjVtQw4Xy77ehsO0n7PUdTw2Ew9QVDULifHNVhYTSApuMtc1pdIi+u67OPfDjGYcTTaMQzd1MEPb50yZ9RKyVPMKk53MqNOpLg5rhp4h4mnz0WkMxFQOcSAGgn5Rt0TCFr62AqcRoms0N/aqDWtqNBb+/pgeF4Atns7zhZCmJugEqQpUQII09UJTp+uiBsJEsBCK2Xw34dSqOr1KpqDJ3FMGm/IQ3E1e5qmYOlMuPotxheDUWnwipZtV0teIH/h7WNoA+HUNrZTzIK8o4Dxh+GqFzXVA1zSHCm7KXEA5JuLAn6rQO7dumzsSBbw96Y/r/AI/4jc/ogNnjOzeGBDJe7I3EUQBVnKzCuFemz5bnPDj5xa4VL2+4BTbg3YkB+YPouaS8GTi81SsHANH8cx5qkodu3CnDnYk1I+bvSGyYzGM95vy1Cru0Hap2IAZNY0rFzKlQkFwDcp1MQQ8xtmQZ6UNHRSMqNGrAfNzvwIXXU4vULQwZabBfLTGQExGZxmXGJ1KDhIQF1V+JVHtyvcXt2DiTG1uSZg8K+q7JTpue47Nk++wHUoiBexfC456IdWIz02CnSjXJOYZjo06DXRoWNw/ZltEMdVOeoTIa2Sxkbud/EZ2+63eHrjDcPqV3XhrnATqTZouIiSPdStJcRj8BhcRVc8Z673ZiA3OQcoGtmsERre6sBx5tTwmiDSgZdM1tDOmvtzXkOGw5IY8nMXy5x3LnXJ+i2PCKpaQ03n7DVQbrh9Wm6TkdTvsc7YkG4IHXQq0/ZpjQ31mPSCJVPw6YHL69BbyHPVXFE7TA5HT9WUV28PbldA0Iv5yPzKsXxquHBsg+XTz9xYLpc7bfoghxRsf+yw/aenLHAA3tPnOv191tatIn9b9FR4zAl7hJsNb2gXP5IIKdfLiBSaTDKVIdb5j6Wa1WWJbmMXnW95CouH1pxmK38dPSLAUm+GdhdaOoBY/b1Qc9IOAAPqeu6qOO9nsNip72k0uizxZ46h+vvIVli6ji8CbRMf384XPTqQC07EjXQaj6IjzCt2JxuDe6phamYDQt+eNYdTOvoT5KkxGPb3hqYvBsc8TJp5mBzj/7ynOvUgFe5VBp+CrsfwqnXtVptdyNw4eThcehV0x4qzh9DFPDMK11J+Uuio/MxxEeEHUGN4i3qqnGYGpReadRpa4aj8Qdx1Xo/HvhzPjwzod/K6xnaHiBPoD1WS4lxHENH7NjWOIGhc0d6yNCxxgOHnMgm6qM+QkJsnyBvKdiawcbMa0f0z+KqIUichDSFIEIQhCgIQilCGoQgVeg/Dr/AAavp9ghCJFhjf8AGb5N+71Ydsf/AFSfKj/zU0IWW6xnC/8ACw/r/wA7lpcP87PNCFakbfh2vt+KtX/N7/ghCyq1panyb9ip6aVCodWVTX0P62CEKDK9m/8Ajcd/nb/+umtJiNB+uaEIIcVt5fiFxD5qnp/yhCEHRsPILmq6JEIKnGLJ/ET/AIVv/wAQfYpUJErzVyRCFtkIQhEf/9k="
  
     
// }, function(err , allalbums){
//     if(err){
//         console.log("oops error");

//     }else{
//         console.log("you just added a new song in db");
//         console.log(allalbums);
//     }
// });





app.use(bodyParser.urlencoded({extended:true}));







//=============================================================
app.get("/" ,function(req,res){
   
    res.render("landing.ejs");
});
//this is where you can see the albums
app.get("/XO" ,function(req,res){
      Song.find({} ,function(err,  allalbums){
          if(err){
              console.log(err);
          }else{
                res.render("albums.ejs" ,{albums:allalbums});  
          }
      })
    
    //res.render("albums.ejs" ,{albums:allalbums});
});

//this is where you can see the added albums
app.post("/XO" ,function(req,res){
    //get data from the form
    // res.send("Heloo post route");
    


    //so we are sending Image and name htrough that form to the post page
    //we are storing that name and image in 2 variables
    //so now our goal is to whatever we enter  in the form that should get added in the db

    var name = req.body.name;
    var img =  req.body.img;
    var newAlbum = {name:name , image:img}; 
    //albums.push(newAlbum);
    //so now our goal is to whatever we enter  in the form that should get added in the db
    Song.create(newAlbum ,function(err , newsong){
        if(err){
            console.log(err);
        }else{
            res.redirect("/XO");
        }
    });
    
   
});

//this is the form for addding new album and sending to the above server 
app.get("/XO/new" ,function(req,res){
        res.render("new.ejs");
});





app.listen(3000, function(){
    console.log("STARTING PORT 3000");
});