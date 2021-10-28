# 팰린드롬 문제 -2 
# 데크 자료형 활용
# Deque를 명시적으로 선언하여 좀 더 속도 높인 버전.

# 1번 풀이보다 280-44= 236m/s가 줄어들었다.

class Solution:
    
    def isPalindrome(self,s:str)->bool:
        
        
        strs: Deque = collections.deque()
            
        
        for char in s:
            if char.isalnum():
                
                strs.append(char.lower())
                
                
        while len(strs)>1:
            
            if strs.popleft()!= strs.pop():
                
                return False
            
        return True

