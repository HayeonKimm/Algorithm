#344 problem

# 투포인터를 이용한 전통적인 방식
# pythonic way랑 별차이는 없다.


class Solution:
    
    def reverseString(self, s:List[str]) -> None:
        
        left,right = 0, len(s)-1
        
        while left < right:
            
            s[left], s[right] = s[right],s[left]
            
            left+=1
            right-=1
