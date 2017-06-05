/**
 * Created by hientran on 6/3/17.
 */

import randomString from 'randomstring';


function generateCode(num) {
  return randomString.generate(num);
}

export { generateCode }