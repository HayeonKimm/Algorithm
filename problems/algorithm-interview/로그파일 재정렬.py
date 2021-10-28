# 937 problem

class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        
        
        letters, digits =[], []
        
        for log in logs:
            
            if log.split()[1].isdigit():
                digits.append(log)
                
            else:
                letters.append(log)
                
                
        # 람다
        # 동일한 경우 후순위로 [0]으로 지정해 정렬
        letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))
        
        return letters+digits
        
