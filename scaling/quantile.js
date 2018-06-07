/*
  Quantile Normalization

  https://en.wikipedia.org/wiki/Quantile_normalization

  Step 1
  Arrays 1 to 3, genes A to D
  A    5    4    3
  B    2    1    4
  C    3    4    6
  D    4    2    8

  Step 2
  For each column determine a rank from lowest to highest and assign number i-iv
  A    iv    iii   i
  B    i     i     ii
  C    ii    iii   iii
  D    iii   ii    iv

  These rank values are set aside to use later.

  Step 3
  Go back to the first set of data. Rearrange that first set of column values
  so each column is in order going lowest to highest value.
  (First column consists of 5,2,3,4. This is rearranged to 2,3,4,5.
  Second Column 4,1,4,2 is rearranged to 1,2,4,4,
  and column 3 consisting of 3,4,6,8 stays the same
  because it is already in order from lowest to highest value.)

  The result is:
  A    5    4    3    becomes A 2 1 3
  B    2    1    4    becomes B 3 2 4
  C    3    4    6    becomes C 4 4 6
  D    4    2    8    becomes D 5 4 8

  Step 4
  Now find the mean for each row to determine the ranks
  A (2 1 3)/3 = 2.00 = rank i
  B (3 2 4)/3 = 3.00 = rank ii
  C (4 4 6)/3 = 4.67 = rank iii
  D (5 4 8)/3 = 5.67 = rank iv

  Step 5
  Now take the ranking order and substitute in new values
  A    iv    iii   i
  B    i     i     ii
  C    ii    iii   iii
  D    iii   ii    iv

  becomes:
  A    5.67    4.67    2.00
  B    2.00    2.00    3.00
  C    3.00    4.67    4.67
  D    4.67    3.00    5.67

  These are the new normalized values. The new values have the same
  distribution and can now be easily compared.

*/

module.exports = (a) => {
  if(Array.isArray(a)) {
    //get columns
    //
  }
  throw new Error('parameter a is not an Array')
}
