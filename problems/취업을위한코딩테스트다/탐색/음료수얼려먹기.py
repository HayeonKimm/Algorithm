#!/usr/bin/env python
# coding: utf-8

# # 탐색문제.
# ## 그래프를 통해 해결하자. (DFS)

# 1. 특정한 지점의 주변 상,하,좌,우를 살펴본 뒤에 주변 지점 중에서 값이
# '0'이면서 아직 방문하지 않은 지점이 있다면 해당 지점을 방문한다.
# 
# 
# 2. 방문한 지점에서 다시 상,하,좌,우를 살펴보면서 방문을 다시 진행하면,
# 연결된 모든 지점을 방문할 수 있다.
# 
# 3. 1~2 번의 과정을 모든 노드에 반복하며 방문하지 않은 지점의 수를 센다.

# ## 0이면서 아직 방문하지 않은 지점을 세는게 중요하다

# In[ ]:


#얼음을 얼릴 수 있는 지역의 수(묶음) 세기


n,m = map(int,input().split())


graph=[]

for _ in range(a+1):
    graph.append(list(map(int,input().split())))
    
def dfs(x,y):
    # 주어진 범위를 벗어나는 경우에는 즉시 종료
    if x<= -1 or x>=n or y<= -1 or y>= m:
        return False
    
    # 현재 노드를 아직 방문하지 않았다면
    if graph[x][y]==0:
        #방문처리
        graph[x][y]=1
        
        # 상 ,하 ,좌 ,우의 위치도 모두 재귀적으로 호출
        
        dfs(x-1,y)
        dfs(x,y-1)
        dfs(x+1,y)
        dfs(x,y+1)
        
        return True
    
    return False


#모든 노드(위치)에 대하여 음료수 채우기

result=0
for i in range(n):
    for j in range(m):
        
        # 현재 위치에서 DFS 수행
        
        if dfs(i,j) == True:
            result+=1
            
print(result)


# ## 아 한번 함수 돌리면 주변거까지 다 방문시키는구나!
